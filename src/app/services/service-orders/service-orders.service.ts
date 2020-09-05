import { LoadingService } from './../loading/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { IServiceOrder } from '../../model/IServiceOrder';

@Injectable({
  providedIn: 'root',
})
export class ServiceOrdersService {
  url = 'http://localhost:3000/service-order/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public getServiceOrders(): Observable<IServiceOrder[]> {
    return this.http
      .get<IServiceOrder[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  public createServiceOrder(
    serviceOrder: IServiceOrder
  ): Observable<IServiceOrder> {
    return this.http
      .post<IServiceOrder>(this.url, serviceOrder, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
