import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SnedecorComponent } from './snedecor/snedecor.component';
import { HomogeneityMeanIndependantComponent } from './homogeneity-mean-independant/homogeneity-mean-independant.component';
import { HomogeneityMeanMatchedComponent } from './homogeneity-mean-matched/homogeneity-mean-matched.component';
import { ConformityComponent } from './conformity/conformity.component';

@NgModule({
  declarations: [
    AppComponent,
    SnedecorComponent,
    HomogeneityMeanIndependantComponent,
    HomogeneityMeanMatchedComponent,
    ConformityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
