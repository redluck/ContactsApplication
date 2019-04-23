import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { environment } from '../../environments/environment';

// Ogni service deve poter essere iniettabile
@Injectable()
export class ContactService {

    // URL per le operazioni CRUD
    private allContactsUrl = environment.url.list;
    private contactUrl = environment.url.contact;

  /*---------------------------------------------------------------------------*
	| constructor()                                                              |
	*---------------------------------------------------------------------------*/
    // Iniettiamo l'HttpClient dentro il servizio
    constructor(
        private http: Http
    ) { }

  /*---------------------------------------------------------------------------*
	| getContacts()                                                              |
	| una chiamata asincrona ad un server ritorna sempre un oggetto Observable   |
	*---------------------------------------------------------------------------*/
    getContacts(): Observable<Contact[]> {
        return this.http.get(this.allContactsUrl)
            .pipe(
                // Otteniamo i dati dal server
                map(response => response.json()),
                // Intercettiamo eventuali errori
                catchError(error => {
                    return Observable.throw(error);
                })
            );
    }

  /*---------------------------------------------------------------------------*
	| addContact()                                                               |
	*---------------------------------------------------------------------------*/
    addContact(contact: Contact): Observable<number> {
        // Terzo parametro "options?" da passare al metodo Http.post()
        // (costituito da un Headers)
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        const httpOptions = new RequestOptions({headers: myHeaders});

        return this.http.post(this.contactUrl, contact, httpOptions)
            .pipe(
                map(response => response.status),
                catchError(error => {
                    return Observable.throw(error);
                })
            );
    }
}
