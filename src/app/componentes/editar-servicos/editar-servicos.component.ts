import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-editar-servicos',
  templateUrl: './editar-servicos.component.html',
  styleUrls: ['./editar-servicos.component.css']
})
export class EditarServicosComponent {
  clienteList$!:Observable<any[]>;

  constructor(private service:ServicosApiService){}

  @Input()cliente:any;
  clienteId!:number;
  servicoId!:number;

  ngOnInit(): void {
    this.clienteList$=this.service.getClientes();
    this.clienteId=this.cliente.clienteId;
  }
  updateServico(){
    var servico={
      clienteId:this.clienteId,
      servicoId:this.servicoId
    }
    var id:number=this.clienteId;
    this.service.updateServico(servico.servicoId,servico.clienteId).subscribe();
  }
  
}
