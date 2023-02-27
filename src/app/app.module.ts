import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
import { PoComponentsModule } from '@po-ui/ng-templates'

import { PoModule } from '@po-ui/ng-components';
import { MainComponentComponent } from './main/main-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path :'' , component: MainComponentComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    PoModule,
    PoCodeEditorModule,
    PoComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
