
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  servicosList$!:Observable<any[]>;
  peritagem!:any;

  constructor(
    private service:ServicosApiService

  ){}


  ngOnInit(): void {
    this.servicosList$=this.service.getServicosList();
    this.peritagem=this.service.getPeritagem();
  }

  conversorData(date:Date){
    let data=new Date(date);
    let dataFormatada=(`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`)
    return dataFormatada
  }
  
  
}
