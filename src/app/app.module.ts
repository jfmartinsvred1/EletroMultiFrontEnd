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

@NgModule({
  declarations: [
    AppComponent,
    ServicosComponent,
    ShowServicosComponent,
    AddEditServicosComponent,
    CabecalhoComponent,
    RodapeComponent
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
