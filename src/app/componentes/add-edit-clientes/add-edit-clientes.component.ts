import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-add-edit-clientes',
  templateUrl: './add-edit-clientes.component.html',
  styleUrls: ['./add-edit-clientes.component.css']
})
export class AddEditClientesComponent implements OnInit{

  clientesList$!:Observable<any[]>;

  constructor(private service:ServicosApiService){}

  @Input()cliente:any;
  nome:string="";
  cpf:string="";
  numero:string="";
  email:string="";

  ngOnInit(): void {
    this.nome=this.cliente.nome;
    this.cpf=this.cliente.cpf;
    this.numero=this.cliente.numero;
    this.email=this.cliente.email;
    this.clientesList$=this.service.getClientes();
  }
  
  addCliente(){
    var cliente={
      nome:this.nome,
      cpf:this.cpf,
      numero:this.numero,
      email:this.email
    };
    this.service.postCliente(cliente).subscribe();
  }

}
