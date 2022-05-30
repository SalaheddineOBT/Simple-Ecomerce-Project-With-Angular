import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NaveComponent } from './components/nave/nave.component';
import { ConnectionService } from './services/connection.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api.service';
import { CartService } from './services/cart.service';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NaveComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
      ConnectionService,
      ApiService,
      CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
