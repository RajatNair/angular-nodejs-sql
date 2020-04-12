import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './shared/security/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customers',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
    NgbModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
