import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { AppRoutingModule } from './/app-routing.module';
import { NewContactComponent } from './new-contact/new-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateValidatorDirective } from './shared/date.directive';


@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        NewContactComponent,
        DateValidatorDirective
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ContactService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
