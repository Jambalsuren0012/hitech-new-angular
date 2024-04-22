// scroll.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollSubject = new Subject<string>();

  getScrollObservable() {
    return this.scrollSubject.asObservable();
  }

  scrollTo(component: string) {
    this.scrollSubject.next(component);
  }
}
