import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar #navbar></app-navbar>
    <app-header #header></app-header>
    <app-outsourcing #outsourcing> </app-outsourcing>
    <app-ms365 #ms365></app-ms365>
    <app-fortinet #fortinet></app-fortinet>

    <app-it-managed-service #itManagedService></app-it-managed-service>
    <app-service-support #serviceSupport></app-service-support>

    <app-footer #footer> </app-footer>
    <!-- <app-contact> </app-contact> -->
  `,
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
  @ViewChild('serviceSupport', { static: true }) footer!: ElementRef;

  constructor() {}

  scrollToComponent(component: ElementRef): void {
    component.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
