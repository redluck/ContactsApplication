
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TestGuard } from './services/test-guard';
import { MyResolverService } from './services/my-resolver.service';

const routes: Routes = [
    { path: 'contacts', component: ContactListComponent },
	{ path: 'new', component: NewContactComponent, canActivate: [TestGuard] },
	{ path: 'new-2', component: TemplateDrivenFormComponent },
	{ path: 'new-3', component: ReactiveFormComponent, resolve: { message: MyResolverService } }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        MyResolverService
    ]
})
export class AppRoutingModule { }
