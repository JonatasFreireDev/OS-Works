import { NotifierComponent } from './../../components/notifier/notifier.component';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private _snackBar: MatSnackBar) {}

  sucess(message): void {
    this._snackBar.openFromComponent(NotifierComponent, {
      data: {
        message: message,
      },
      panelClass: 'messageSuccess',
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  error(messageError: string): void {
    this._snackBar.openFromComponent(NotifierComponent, {
      data: {
        message: messageError,
      },
      panelClass: 'messageError',
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
