import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
import { SignUpService } from './login/signup/signup.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    DashboardModule,
    HomeModule,
    ErrorsModule,
    LoginModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SignUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
