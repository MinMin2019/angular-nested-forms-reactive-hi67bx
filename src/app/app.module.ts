import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DictComponent } from './dict.component';
import { GroupComponent } from './group.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DictComponent, GroupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
