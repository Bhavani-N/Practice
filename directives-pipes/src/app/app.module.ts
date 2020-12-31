import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OfRedDirective } from './ofred.directive';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DateViewerComponent } from './date-viewer/date-viewer.component';
import { ProjectionComponent } from './projection/projection.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    AppComponent,
    OfRedDirective,
    UnlessDirective,
    BasicHighlightDirective,
    ShortenPipe,
    FilterPipe,
    DateViewerComponent,
    ProjectionComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
