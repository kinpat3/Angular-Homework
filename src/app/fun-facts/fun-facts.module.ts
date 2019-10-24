import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowComponent } from './arrow/arrow.component';
import { ClassesComponent } from './classes/classes.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { MapsComponent } from './maps/maps.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ScopeAndLetComponent } from './scope-and-let/scope-and-let.component';
import { SetsComponent } from './sets/sets.component';
import { TemplateStringsComponent } from './template-strings/template-strings.component';
import { WeakmapWeaksetComponent } from './weakmap-weakset/weakmap-weakset.component';




@NgModule({
  declarations: [ArrowComponent, ClassesComponent, DestructuringComponent, MapsComponent, ParametersComponent, ScopeAndLetComponent, SetsComponent, TemplateStringsComponent, WeakmapWeaksetComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ArrowComponent,
    ClassesComponent,
    DestructuringComponent,
    MapsComponent,
    ParametersComponent,
    ScopeAndLetComponent,
    SetsComponent,
    TemplateStringsComponent,
    WeakmapWeaksetComponent,
  ]
})
export class FunFactsModule { }
