import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicosComponent } from './componentes/servicos/servicos.component';
import { ShowServicosComponent } from './componentes/show-servicos/show-servicos.component';
import { AddEditServicosComponent } from './componentes/add-edit-servicos/add-edit-servicos.component';
import { ServicosApiService } from './servicos-api.service';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { AddEditClientesComponent } from './componentes/add-edit-clientes/add-edit-clientes.component';
import { EditarServicosComponent } from './componentes/editar-servicos/editar-servicos.component';
import { EditClientesComponent } from './componentes/edit-clientes/edit-clientes.component';
import { AddEquipamentoComponent } from './componentes/add-equipamento/add-equipamento.component';
import { EstatisticasComponent } from './componentes/estatisticas/estatisticas.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicosComponent,
    ShowServicosComponent,
    AddEditServicosComponent,
    CabecalhoComponent,
    RodapeComponent,
    ClientesComponent,
    AddEditClientesComponent,
    EditarServicosComponent,
    EditClientesComponent,
    AddEquipamentoComponent,
    EstatisticasComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicosApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
