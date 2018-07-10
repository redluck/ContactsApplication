import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { dateValidator } from '../../shared/date.directive';

@Component({
    selector: 'app-new-contact',
    templateUrl: './new-contact.component.html',
    styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

    // Codice ritornato dall'operazione HTTP
    httpStatusCode: number;
    // Intercettiamo il click sul bottone di submit del form
    buttonClicked = false;
    // Controllo sulla validità della data del form
    isDateValid = false;
    // Form
    contactForm = new FormGroup({
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        age: new FormControl(''),
        // birthDate: new FormControl('', dateValidator(/bob/i))
        birthDate: new FormControl('', dateValidator(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/))
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
	|                                                                            |
	*---------------------------------------------------------------------------*/
    onContactFormSubmit() {
        this.buttonClicked = true;
        // Se il processo di validazione fallisce usciamo dal metodo
        if (this.contactForm.invalid) {
            return;
        }
        // Altrimenti procediamo
        //this.preProcessConfigurations();
        let name = this.contactForm.get('name').value.trim();
        let surname = this.contactForm.get('surname').value.trim();
        let age = this.contactForm.get('age').value;
        let dateOfBirth = this.contactForm.get('birthDate').value.trim();

        // let regex = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d$/);
        // this.isDateValid = regex.test(dateOfBirth);
        // Se la data non è in un formato valido usciamo dal metodo
        /*if (!this.isDateValid) {
            return;
        }*/

        let contact = new Contact(null, name, surname, age, dateOfBirth);

        this.contactService.addContact(contact)
            .subscribe(successCode => {
                // Impostiamo un codice positivo ritornato dall'operazione HTTP
                this.httpStatusCode = successCode;
            }, errorCode => this.httpStatusCode = errorCode);
    }
}
