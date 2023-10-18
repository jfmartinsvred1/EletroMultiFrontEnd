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

  @Input()servico:any;
  status!:string
  servicoId!:number

  ngOnInit(): void {
    this.clienteList$=this.service.getClientes();
    this.status=this.servico.status;
    this.servicoId=this.servico.servicoId
  }
  updateServico(){
    var service={
      status:this.status
    }
    this.service.updateServico(this.servicoId,service).subscribe();
  }
  
}
