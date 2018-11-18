import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ApoliceFormComponent } from './apolices/apolice-form/apolice-form.component';
import { ApoliceListComponent } from './apolices/apolice-list/apolice-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';



const routes: Routes = [
    {path: 'apolices', component: ApoliceListComponent},
    {path: 'apolices/form', component: ApoliceFormComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}