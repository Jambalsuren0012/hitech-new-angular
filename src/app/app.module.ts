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
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent, ItManagedServiceComponent, OutsourcingComponent, ServiceSupportComponent, Ms365Component, FortinetComponent, ContactComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
