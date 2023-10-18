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
  statusList$!:Observable<any[]>;

  constructor(private service:ServicosApiService){}

  @Input()servico:any;
  clienteId!:number;
  statusId!:number;

  ngOnInit(): void {
    this.clienteList$=this.service.getClientes();
    this.statusList$=this.service.getStatus();
    this.clienteId=this.servico.clienteId;
    this.statusId=this.servico.statusId;
  }

  addServico(){
    var servico={
      clienteId:this.clienteId,
      statusId:this.statusId
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
