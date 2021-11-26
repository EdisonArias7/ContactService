import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../interfaces/ContactInterface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  listContacts: Contact[] = [];
  constructor(private contactService:ContactService) { }

  ngAfterViewInit(): void {
    this.contactService.getAll()
    .subscribe((response)=>{
      console.log(response);
      this.listContacts = response;
    },(err)=>{
      console.log("No se listo los contactos");
    })
  }

  async delete(id:any){
    this.contactService.delete(id)
    .subscribe((response)=>{
      console.log(response);
    },(err)=>{
      console.log(err);
      console.log('entró al error')
    })

    for (let i = 0; i < this.listContacts.length; i++) {
      if (this.listContacts[i]['id'] === id) {
        this.listContacts.splice(i, 1);
      }
    }
  }
}
