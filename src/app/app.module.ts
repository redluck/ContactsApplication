import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ContactService } from './services/contact.service';
import { AppRoutingModule } from './/app-routing.module';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateValidatorDirective } from './shared/date.directive';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TestGuard } from './services/test-guard';
import { MyResolverService } from './services/my-resolver.service';

@NgModule({
    declarations: [
        AppComponent,
        ContactListComponent,
        NewContactComponent,
        DateValidatorDirective,
        TemplateDrivenFormComponent,
        ReactiveFormComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
		ContactService,
        TestGuard,
        MyResolverService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
