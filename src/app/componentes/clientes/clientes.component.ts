import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Documento } from 'src/app/Models/Documento';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientesList$!:Observable<any[]>;
  servicosList$!:Observable<any[]>;

  constructor(private service:ServicosApiService){}
  ngOnInit(): void {
    this.clientesList$=this.service.getClientes();
  }

}