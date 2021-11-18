import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TableComponent } from './table/table.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TableComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
