import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ItManagedServiceComponent } from './it-managed-service/it-managed-service.component';
import { OutsourcingComponent } from './outsourcing/outsourcing.component';
import { ServiceSupportComponent } from './service-support/service-support.component';
import { Ms365Component } from './ms365/ms365.component';
import { FortinetComponent } from './fortinet/fortinet.component';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

const approutes: Routes = [
  { path: 'comingsoon', component: ComingSoonComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ItManagedServiceComponent,
    OutsourcingComponent,
    ServiceSupportComponent,
    Ms365Component,
    FortinetComponent,
    FooterComponent,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
