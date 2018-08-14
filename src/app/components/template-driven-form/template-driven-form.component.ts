import { Contact } from './../../models/contact';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
	selector: 'app-template-driven-form',
	templateUrl: './template-driven-form.component.html',
	styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

	//Modello da creare
	//(il two way data binding collega il model del component ai campi del form
	//grazie alla direttiva [(ngModel)] mappata sui vari input della view)
	private model = new Contact(null, null, null, null, null);

	//Codice ritornato dall'operazione HTTP
	private httpStatusCode: number;
	//Descrizione del codice ritornato
	private httpCodeDescription: string;

	constructor(private contactService: ContactService) { }

	setHttpCodeDescription() {
		switch (this.httpStatusCode) {
			case 201:
				this.httpCodeDescription = 'Created';
				break;
			default:
				this.httpCodeDescription = '';
		}
	}

	createContact() {
		this.contactService.addContact(this.model)
			.subscribe(successCode => { this.httpStatusCode = successCode; this.setHttpCodeDescription() },
				errorCode => this.httpStatusCode = errorCode
			);
	}

}
