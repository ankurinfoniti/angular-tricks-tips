import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryStateComponent } from './caching/country-state/country-state.component';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { TaskComponent } from './kanban/task/task.component';
import { ReadPdfComponent } from './read-pdf/read-pdf.component';

const routes: Routes = [
  {
    path: 'html-to-pdf',
    component: HtmlToPdfComponent,
  },
  {
    path: 'http-caching',
    component: CountryStateComponent,
  },
  {
    path: 'image-slider',
    component: ImageSliderComponent,
  },
  {
    path: 'kanban-fire',
    component: TaskComponent,
  },
  {
    path: 'read-pdf',
    component: ReadPdfComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
