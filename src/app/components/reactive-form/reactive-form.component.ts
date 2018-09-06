import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

    myForm = this.fb.group({
        txtName: ["", Validators.required],
        txtSurname: ["", Validators.required],
        txtAge: ["", Validators.required],
        txtBirth: ["", Validators.required]
    })

    //Modello da aggiornare man mano che cambiano i valori del form
    model: Contact;

    //Codice ritornato dall'operazione HTTP
    private httpStatusCode: number;

    data: any;
    ngOnInit() {
        this.data = this.route.snapshot.data;
    }

	/*---------------------------------------------------------------------------*
	| constructor()                                                              |
	*---------------------------------------------------------------------------*/
    constructor(private fb: FormBuilder, private contactService: ContactService, private route: ActivatedRoute) {

        this.model = new Contact(null, null, null, null, null);

        //Mi sottoscrivo ad ogni modifica del form e ne mappo i valori correnti
        //sulle corrispondenti proprietà del modello dei dati
        this.myForm.valueChanges
            .subscribe(value => {
                this.model.name = value.txtName;
                this.model.surname = value.txtSurname;
                this.model.age = value.txtAge;
                this.model.birthDate = value.txtBirth;
                console.log(this.model);
            }
            );
    }

	/*---------------------------------------------------------------------------*
	| createContact()                                                            |
	*---------------------------------------------------------------------------*/
    createContact() {
        this.contactService.addContact(this.model)
            .subscribe(
                successCode => {
                    this.httpStatusCode = successCode;
                    //this.setHttpCodeDescription();
                    //this.submitted = true;
                },
                errorCode => {
                    this.httpStatusCode = errorCode
                }
            );
    }

}
