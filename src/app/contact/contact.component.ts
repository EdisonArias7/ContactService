import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
    private fb: FormBuilder,
    private http: HttpClient,
    private routes: Router
  ) {
    this.form_contact = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  postData() {
    const body:Contact=this.form_contact.value;
    this.contactService.save(body)
    .subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.log("fallo al crear contacto");
    })
  }
}
