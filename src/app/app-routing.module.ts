import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './compenents/add-post/add-post.component';
import { ListPostComponent } from './compenents/list-post/list-post.component';
import { UpdatePostComponent } from './compenents/update-post/update-post.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'list',
  pathMatch:'full'

},
{
  path:'list',
  component:ListPostComponent
},

{
  path:'add',
  component:AddPostComponent
},

{
  path:'update/:id',
  component:UpdatePostComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
