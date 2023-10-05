import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { PictureDetailComponent } from './components/picture-detail/picture-detail.component';

const routes: Routes = [
  {path: "month-view" , component: MonthViewComponent},
  {path: "detail/:date", component: PictureDetailComponent},
  {path: "" , redirectTo: "month-view", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
