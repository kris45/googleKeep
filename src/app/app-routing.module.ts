import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesComponent} from './notes/notes.component';
import {BasketComponent} from './basket/basket.component';
import {ArchiveComponent} from './archive/archive.component';

const routes: Routes = [
  { path: '', redirectTo: '/Notes', pathMatch: 'full' },
  { path: 'Notes', component: NotesComponent },
  { path: 'Archive', component: ArchiveComponent },
  { path: 'Basket', component: BasketComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
