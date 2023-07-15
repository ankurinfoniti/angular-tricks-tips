import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { CountryStateComponent } from './caching/country-state/country-state.component';
import { CacheInterceptor } from './caching/core/cache.interceptor';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { TaskComponent } from './kanban/task/task.component';
import { TaskDetailComponent } from './kanban/task-detail/task-detail.component';
import { TaskDialogComponent } from './kanban/task-dialog/task-dialog.component';
import { ReadPdfComponent } from './read-pdf/read-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlToPdfComponent,
    CountryStateComponent,
    ImageSliderComponent,
    TaskComponent,
    TaskDetailComponent,
    TaskDialogComponent,
    ReadPdfComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
