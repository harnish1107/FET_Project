import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsExampleComponent } from './forms-example.component';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';



@NgModule({
  declarations: [
    FormsExampleComponent,
    ReactiveExampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsExampleModule { }
