import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-add-edit-servicos',
  templateUrl: './add-edit-servicos.component.html',
  styleUrls: ['./add-edit-servicos.component.css']
})
export class AddEditServicosComponent implements OnInit {

  clienteList$!:Observable<any[]>;
  servicoList$!:Observable<any[]>;

  constructor(private service:ServicosApiService){}

  @Input()cliente:any;
  clienteId!:number;

  ngOnInit(): void {
    this.clienteList$=this.service.getClientes();
    this.clienteId=this.cliente.clienteId;
  }

  addServico(){
    var servico={
      clienteId:this.clienteId
    }
    this.service.postServico(servico).subscribe();
  }
  updateServico(){
    var servico={
      clienteId:this.clienteId
    }
    var id:number=this.clienteId;
    this.service.postServico(servico).subscribe();
  }
  

}
