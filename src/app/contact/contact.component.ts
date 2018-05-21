import { Component, OnInit } from '@angular/core';
import { Contact } from './../contact';
import { ContactService } from './../contact.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	//Istanziamo una variabile contenente la lista
	contacts: Contact[];
	//Codice ritornato dall'operazione HTTP
	httpStatusCode: number;

	/*---------------------------------------------------------------------------*
	| constructor()                                                              |
	*---------------------------------------------------------------------------*/
	constructor(private contactService: ContactService) { }

	/*---------------------------------------------------------------------------*
	| ngOnInit()                                                                 |
	| usato per l'esecuzione di operazioni dopo che il componente è stato        |
	| inizializzato tramite il costruttore                                       |
	*---------------------------------------------------------------------------*/
	ngOnInit() { 
		this.getContacts();
	}

	/*---------------------------------------------------------------------------*
	| getContacts()                                                              |
	| contactService.getContacts() attende una risposta dal server               |
	| Observable<Contact[]>.subscribe() la imposta nella proprietà di classe     |
	*---------------------------------------------------------------------------*/
	getContacts(): void {
		this.contactService.getContacts()
			.subscribe(
				data => this.contacts = data,
				errorCode => this.httpStatusCode = errorCode);
	}
}
