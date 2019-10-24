import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrowComponent } from './fun-facts/arrow/arrow.component';
import { ClassesComponent } from './fun-facts/classes/classes.component';
import { DestructuringComponent } from './fun-facts/destructuring/destructuring.component';
import { MapsComponent } from './fun-facts/maps/maps.component';
import { ParametersComponent } from './fun-facts/parameters/parameters.component';
import { ScopeAndLetComponent } from './fun-facts/scope-and-let/scope-and-let.component';
import { SetsComponent } from './fun-facts/sets/sets.component';
import { TemplateStringsComponent } from './fun-facts/template-strings/template-strings.component';
import { WeakmapWeaksetComponent } from './fun-facts/weakmap-weakset/weakmap-weakset.component';


const routes: Routes = [
  {
    path: 'arrow', component: ArrowComponent
  },
  {
    path: 'classes', component: ClassesComponent
  },
  {
    path: 'destructuring', component: DestructuringComponent
  },
  {
    path: 'maps', component: MapsComponent
  },
  {
    path: 'parameters', component: ParametersComponent
  },
  {
    path: 'scope', component: ScopeAndLetComponent
  },
  {
    path: 'sets', component: SetsComponent
  },
  {
    path: 'template', component: TemplateStringsComponent
  },
  {
    path: 'weak', component: WeakmapWeaksetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
