import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ServicosApiService } from 'src/app/servicos-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-servicos',
  templateUrl: './show-servicos.component.html',
  styleUrls: ['./show-servicos.component.css']
})
export class ShowServicosComponent implements OnInit{

  servicoList$!:Observable<any[]>;
  statusList$!:Observable<any[]>;
  equipamentoList$!:Observable<any[]>;
  idUpdate!:number;
  pagAtual:number=0;
  filtro:string='';
  formulario!:FormGroup;
  constructor(
    private service:ServicosApiService,
    private builder:FormBuilder,
    private router:Router
    
    ){}


  ngOnInit(): void {
    this.servicoList$=this.service.getServicosListComPag(this.pagAtual);
    this.statusList$=this.service.getStatus();
    this.formulario=this.builder.group({
      servicoId:[this.idUpdate,Validators.required],
      nome:['',Validators.compose([Validators.required])],
      modelo:['',Validators.compose([Validators.required])],
      marca:['',Validators.compose([Validators.required])],
      numSerie:['',Validators.compose([Validators.required])],
      garantia:[true,Validators.compose([Validators.required])],

      
    })
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
   
    if(this.formulario.valid){
      this.service.postEquipamento(this.formulario.value).subscribe(p=>{
        this.router.navigate(['/servicos'])})
    }
  ;
  }
  salvarId(id:number){
    this.idUpdate=id;
  }

  avancarPag(){
    this.pagAtual= this.pagAtual+10
    this.servicoList$=this.service.getServicosListComPag(this.pagAtual);
  }
  voltarrPag(){
    if(this.pagAtual>0){
      this.pagAtual= this.pagAtual-10
      this.servicoList$=this.service.getServicosListComPag(this.pagAtual);
    }
  }
}
