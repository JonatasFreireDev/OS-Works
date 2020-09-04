import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss'],
})
export class CreateServiceComponent implements OnInit {
  // orderForm = new FormGroup({
  //   problem: new FormControl(''),
  //   name: new FormControl(''),
  //   number: new FormControl(''),
  //   description: new FormControl(''),
  // });
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      problem: ['', Validators.required],
      name: ['', [Validators.maxLength(55), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      number: ['', [Validators.required, Validators.max(20)]],
      description: ['', [Validators.maxLength(256)]],
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.orderForm.value));
  }

  get number() {
    return this.orderForm.get('number');
  }
}

// profileForm = this.fb.group({
//   firstName: [''],
//   lastName: [''],
//   address: this.fb.group({
//     street: [''],
//     city: [''],
//     state: [''],
//     zip: ['']
//  }),
