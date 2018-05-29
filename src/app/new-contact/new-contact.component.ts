import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from './../contact';
import { ContactService } from './../contact.service';

@Component({
    selector: 'app-new-contact',
    templateUrl: './new-contact.component.html',
    styleUrls: ['./new-contact.component.css']
})
//Prova per PULL
export class NewContactComponent implements OnInit {

    //Codice ritornato dall'operazione HTTP
    httpStatusCode: number;
    //Intercettiamo il click sul bottone di submit del form
    buttonClicked = false;
    //Controllo sulla validità della data del form
    isDateValid = false;
    //Form
    contactForm = new FormGroup({
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        age: new FormControl(''),
        birthDate: new FormControl('')
    });

	/*---------------------------------------------------------------------------*
	| constructor()                                                              |
	*---------------------------------------------------------------------------*/
    constructor(private contactService: ContactService) { }

	/*---------------------------------------------------------------------------*
	| ngOnInit()                                                                 |
	*---------------------------------------------------------------------------*/
    ngOnInit() { }

	/*---------------------------------------------------------------------------*
	| ngOnInit()                                                                 |
	*---------------------------------------------------------------------------*/
    onContactFormSubmit() {
        this.buttonClicked = true;
        //Se il processo di validazione fallisce usciamo dal metodo
        if (this.contactForm.invalid) {
            return;
        }
        //Altrimenti
        //this.preProcessConfigurations();

        let name = this.contactForm.get('name').value.trim();
        let surname = this.contactForm.get('surname').value.trim();
        let age = this.contactForm.get('age').value;
        let dateOfBirth = this.contactForm.get('birthDate').value.trim();

        let regex = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/);
        this.isDateValid = regex.test(dateOfBirth);

        let contact = new Contact(null, name, surname, age, dateOfBirth);

        this.contactService.addContact(contact)
            .subscribe(successCode => {
                //Impostiamo un codice positivo ritornato dall'operazione HTTP
                this.httpStatusCode = successCode;
            }, errorCode => this.httpStatusCode = errorCode);
    }
}
