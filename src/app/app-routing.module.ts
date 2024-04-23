import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

// const routes: Routes = [{ path: 'header', component: HeaderComponent }];

const routes: Routes = [{ path: 'comingsoon', component: ComingSoonComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
