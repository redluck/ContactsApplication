import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

const routes: Routes = [
    { path: 'contacts', component: ContactListComponent },
    { path: 'new', component: NewContactComponent }
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
