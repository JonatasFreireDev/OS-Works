import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = false;

  constructor() {}

  getLoading(): boolean {
    return this.isLoading;
  }

  setLoading(): void {
    this.isLoading = !this.isLoading;
  }
}
