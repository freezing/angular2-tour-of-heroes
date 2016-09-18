import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material 2
import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';

import {HeroesComponent} from './heroes/heroes.component';
import 'hammerjs'
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import {HeroService} from "./shared/service/hero.service";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {DashboardComponent} from "./dashboard/dashboard.component";

import { InMemoryDataService } from "./shared/service/in-memory-data.service";
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule.forRoot(),
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdRadioModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdTooltipModule.forRoot(),
    MdSliderModule.forRoot(),
    MdIconModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  providers: [MdIconRegistry, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
