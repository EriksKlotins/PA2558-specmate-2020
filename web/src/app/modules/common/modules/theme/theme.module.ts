import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpecmateSharedModule } from '../../../specmate/specmate.shared.module';
import { Themer } from './components/themer.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    // MODULE IMPORTS
    BrowserModule,
    SpecmateSharedModule,
    NgbModule
  ],
  declarations: [
    // COMPONENTS IN THIS MODULE
    Themer
  ],
  exports: [
    // THE COMPONENTS VISIBLE TO THE OUTSIDE
    Themer
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [
    // COMPONENTS THAT ARE BOOTSTRAPPED HERE
  ]
})

export class ThemeModule { }
