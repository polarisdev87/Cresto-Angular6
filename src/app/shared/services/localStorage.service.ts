import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  // tslint:disable-next-line: no-any
  public getItem(name: string): any {
    return JSON.parse(window.localStorage.getItem(name) as string);
  }
  // tslint:disable-next-line: no-any
  public setItem(name: string, data: any): void {
    window.localStorage.setItem(name, JSON.stringify(data));
  }

  public removeItem(name: string): void {
    window.localStorage.removeItem(name);
  }
}
