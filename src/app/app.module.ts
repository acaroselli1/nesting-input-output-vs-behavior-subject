import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from '../components/child/child.component';
import { GrandChildComponent } from '../components/grandchild/grandchild.component';
import { GrandparentComponent } from '../components/grandparent/grandparent.component';
import { GreatGrandchildComponent } from '../components/great-grandchild/great-grandchild.component';
import { GreatGrandparentComponent } from '../components/great-grandparent/great-grandparent.component';
import { ParentComponent } from '../components/parent/parent.component';
import { CountComponent } from '../components/count/count.component';
import { ArrowsComponent } from '../components/arrows/arrows.component';
import { FormsModule } from '@angular/forms';
import { CounterService } from '../services/counter.service';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent,
    GrandparentComponent,
    GreatGrandchildComponent,
    GreatGrandparentComponent,
    ParentComponent,
    CountComponent,
    ArrowsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
