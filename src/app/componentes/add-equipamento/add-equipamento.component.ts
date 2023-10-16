import { Component, Input, OnInit } from '@angular/core';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-add-equipamento',
  templateUrl: './add-equipamento.component.html',
  styleUrls: ['./add-equipamento.component.css']
})
export class AddEquipamentoComponent implements OnInit{

  constructor(private service:ServicosApiService){}

  @Input()equipamento:any;
  servicoId!:number;
  nome:string="";
  modelo:string="";
  marca:string="";
  numSerie:string="";
  garantia:boolean=true;

  ngOnInit(): void {
    this.servicoId=this.equipamento.servicoId;
    this.nome=this.equipamento.nome;
    this.modelo=this.equipamento.modelo;
    this.marca=this.equipamento.marca;
    this.numSerie=this.equipamento.numSerie;
    this.garantia=this.equipamento.garantia;
  }
  addEquipamento(id:number){
    var equipamento={
      servicoId:id,
      nome:this.nome,
      modelo:this.modelo,
      marca:this.marca,
      numSerie:this.numSerie,
      garantia:this.garantia
    }
    this.service.postEquipamento(equipamento);

}
}
