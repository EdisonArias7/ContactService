import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ContactService} from './contact.service';
import { Contact } from '../interfaces/ContactInterface';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form_contact: FormGroup;

  constructor(
    private contactService: ContactService,
    private routes: Router
  ) {
    this.form_contact = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    });
  }

  ngOnInit(): void {}

  postData() {

    if(this.form_contact.invalid){
      this.form_contact.markAllAsTouched();
      return
    };

    const body:Contact=this.form_contact.value;
    this.contactService.save(body)
    .subscribe((response)=>{
      console.log(response);
      this.routes.navigate(['/ListContact'])
    },(error)=>{
      console.log("fallo al crear contacto");
    })
  }
}
