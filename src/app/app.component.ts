import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;
  @ViewChild('header', { static: true }) header!: ElementRef;
  @ViewChild('itManagedService', { static: true })
  itManagedService!: ElementRef;
  @ViewChild('ms365', { static: true }) ms365!: ElementRef;
  @ViewChild('fortinet', { static: true }) fortinet!: ElementRef;
  @ViewChild('serviceSupport', { static: true }) serviceSupport!: ElementRef;
  @ViewChild('footer', { static: true }) footer!: ElementRef;

  constructor() {}

  scrollToComponent(component: ElementRef): void {
    component.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
