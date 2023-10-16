import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-show-servicos',
  templateUrl: './show-servicos.component.html',
  styleUrls: ['./show-servicos.component.css']
})
export class ShowServicosComponent implements OnInit{

  servicoList$!:Observable<any[]>;
  equipamentoList$!:Observable<any[]>;
  idUpdate!:number;
  constructor(private service:ServicosApiService){}

  @Input()equipamento:any;
  servicoId!:number;
  nome:string=" ";
  modelo:string=" ";
  marca:string=" ";
  numSerie:string=" ";
  garantia:boolean=true;

  ngOnInit(): void {
    this.servicoList$=this.service.getServicosList();
    this.servicoId=this.equipamento.servicoId;
    this.nome=this.equipamento.nome;
    this.modelo=this.equipamento.modelo;
    this.marca=this.equipamento.marca;
    this.numSerie=this.equipamento.numSerie;
    this.garantia=this.equipamento.garantia;
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
  garantiaS(garantia:boolean):string{
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
  retornarEquipamentos(id:number){
    this.equipamentoList$=this.service.getEquipamentoPorIdServicos(id);
  }
  excluirServico(id:number){
    this.service.deleteServico(id).subscribe();
  }
  addEquipamentos(){
    var equipamento={
      servicoId:this.servicoId,
      nome:this.nome,
      modelo:this.modelo,
      marca:this.marca,
      numSerie:this.numSerie,
      garantia:this.garantia
    }
    this.service.postEquipamento(equipamento).subscribe();
  }
}
