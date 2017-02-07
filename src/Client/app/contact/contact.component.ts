import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { IContact } from './contact.model';
import { slideOutDown } from '../animations/slide-out.animation';

@Component({
    selector: 'data-wells-contact',
    templateUrl: './contact.component.html',
    animations: [slideOutDown]
})
export class ContactComponent implements OnInit, OnDestroy {
    state: string = 'inactive';
    contactForm: FormGroup;
    private name: FormControl;
    private email: FormControl;
    private phone: FormControl;
    private message: FormControl;
    private subscription: Subscription;

    constructor(private http: Http) { }

    ngOnInit(): void {
        this.name = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]);
        this.email = new FormControl('', Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i));
        this.phone = new FormControl('', Validators.pattern('^\\s*\\+?\\s*([0-9][\\s-]*[\\s.]*){10,}$'));
        this.message = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(1500)]);

        this.contactForm = new FormGroup({
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
        }, validateContact)
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    validateName() {
        return this.name.hasError('minLength') || this.name.hasError('maxLength');
    }

    validateMessage() {
        return this.message.hasError('minLength') || this.message.hasError('maxLength');
    }

    validateEmailOrPhone() {
        return this.contactForm.hasError('bothEmpty');
    }

    sendContactInfo(formValues: IContact) {
        this.state = 'active';

        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        this.subscription = this.http.post('/api/Contact/', formValues, { headers }).subscribe();
    }
}

export const validateContact = (control: AbstractControl): { [key: string]: boolean } => {
    const email = control.get('email');
    const phone = control.get('phone');

    if (!email || !phone) return null;
    return email.value || phone.value ? null : { bothEmpty: true };
};
