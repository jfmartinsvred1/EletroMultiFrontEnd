import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowServicosComponent } from './componentes/show-servicos/show-servicos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { AddEditClientesComponent } from './componentes/add-edit-clientes/add-edit-clientes.component';
import { AddEditServicosComponent } from './componentes/add-edit-servicos/add-edit-servicos.component';
import { EditarServicosComponent } from './componentes/editar-servicos/editar-servicos.component';
import { EditClientesComponent } from './componentes/edit-clientes/edit-clientes.component';
import { AddEquipamentoComponent } from './componentes/add-equipamento/add-equipamento.component';
import { EstatisticasComponent } from './componentes/estatisticas/estatisticas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path:'servicos',
    component:ShowServicosComponent
  },
  {
    path:'estatisticas',
    component:EstatisticasComponent
  },
  {
    path:'servicos/cadastrar',
    component:AddEditServicosComponent
  },
  {
    path:'servicos/equipamento/cadastrar',
    component:AddEquipamentoComponent
  },
  {
    path:'servicos/editar',
    component:EditarServicosComponent
  },
  {
    path:'clientes',
    component:ClientesComponent
  },
  {
    path:'clientes/cadastrar',
    component:AddEditClientesComponent
  },
  {
    path:'clientes/editar',
    component:EditClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
