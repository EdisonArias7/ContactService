import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"",component:ContactComponent},
  {path:"EditContact",component:EditContactComponent},
  {path:"ListContact",component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
