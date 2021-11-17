import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  listContacts: Contact[] = [
    {name:"Jhon",lastName:"Villalba",email:"@uptc"},
    {name:"Luis",lastName:"Acero",email:"@gamil"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
