import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      
        first: ['', Validators.compose([Validators.minLength(2), Validators.required])],
        last: ['Drew'],
     
      email: ['', Validators.required]
    });
    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.form) { return; }
    const form = this.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      //const control = ((field == 'first' || field == 'last') ? form.get('name').get(field) : form.get(field));
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {

    'first': '',
    'last': '',
    'email': ''
  };

  validationMessages = {

    'first': {
      'required': 'firstName is required.',
      'minlength': 'minlength 2 required'
    },
    'last': '',

    'email': {
      'required': 'email is required.'
    }
  };

}

