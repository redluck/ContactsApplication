import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const routes: Routes = [
    { path: 'contacts', component: ContactComponent },
    { path: 'contacts/new', component: NewContactComponent }
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
