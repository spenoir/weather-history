import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SelectModule } from 'ng2-material-select';

import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { VisualisationComponent } from './visualisation/visualisation.component';

import { nvD3 } from 'ng2-nvd3';

@NgModule({
  declarations: [
    AppComponent,
    VisualisationComponent,
    nvD3
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    Ng2SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
