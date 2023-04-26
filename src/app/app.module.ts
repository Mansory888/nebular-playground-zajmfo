import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NbUserModule,
  NbButtonModule,
  NbBadgeModule,
  NbThemeModule,
  NbSelectModule,
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbContextMenuModule,
  NbActionsModule,
  NbDialogModule,
  NbMenuModule,
  NbAccordionModule,
  NbInputModule,
  NbDatepickerModule,
  NbStepperModule,
  NbTreeGridModule,
} from '@nebular/theme';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'gdpr' }),
    NbLayoutModule,
    NbActionsModule,
    NbStepperModule,
    NbEvaIconsModule,
    NbDatepickerModule.forRoot(),
    NbContextMenuModule,
    NbMenuModule.forRoot(),
    NbInputModule,
    NbSelectModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbTreeGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
