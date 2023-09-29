import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-show-servicos',
  templateUrl: './show-servicos.component.html',
  styleUrls: ['./show-servicos.component.css']
})
export class ShowServicosComponent implements OnInit{

  servicoList$!:Observable<any[]>;
  constructor(private service:ServicosApiService){}

  ngOnInit(): void {
    this.servicoList$=this.service.getServicosList()
  }
  status(status:number):string{
    let statusS:string
    switch(status){
      case 1:
        statusS='Peritagem';
        break;
      case 2:
        statusS='Para aprovação';
        break;
      case 3:
        statusS='Para execução';
        break;
      case 4:
        statusS='Pronto';
        break;
      case 5:
        statusS='Devolução';
        break;
      default:
        statusS='Status não reconhecido';
        break;

    }
    return statusS
  }
  garantia(garantia:boolean):string{
    if(garantia==true){
      return 'Com Garantia'
    }
    else{
      return 'Sem Garantia'
    }
  }
  verificarEquipamentosOs(eqp:number,servico:number){
    if(eqp==servico){
      return ''
    }
    else{
      return '.d-none'
    }
  }
}
