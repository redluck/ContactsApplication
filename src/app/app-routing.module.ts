import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
    { path: 'contacts', component: ContactListComponent },
	{ path: 'new', component: NewContactComponent },
	{ path: 'new-2', component: TemplateDrivenFormComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
