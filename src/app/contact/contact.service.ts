import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Contact } from '../interfaces/ContactInterface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url:string="http://localhost:3000";

  constructor(private http:HttpClient) { }

  // listar contactos
  getAll():Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.url}/list`);
  }

  // crear contacto
  save(contact:Contact):Observable<Contact>{
    return this.http.post<Contact>(this.url,contact);
  }

  // obtener un contacto por id
  getById(id:number):Observable<Contact>{
    return this.http.get<Contact>(this.url+'/'+id);
  }

  // eliminar contacto
  delete(id:number):Observable<Contact>{
    return this.http.delete<Contact>(`${this.url}/${id}`);
  }

  // editar contacto
  edit(id:number,contact:Contact):Observable<Contact>{
    return this.http.patch<Contact>(this.url+'/'+id,contact);
  }
}
