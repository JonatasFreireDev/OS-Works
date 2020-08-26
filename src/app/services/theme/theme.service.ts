import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isNotDark = true;

  constructor() {}

  setDark(): void {
    console.log(this.isNotDark);
    this.isNotDark = !this.isNotDark;
  }
}
