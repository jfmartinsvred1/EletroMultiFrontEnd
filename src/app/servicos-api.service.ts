import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosApiService {
  
readonly API="https://localhost:7075";

  constructor(private http:HttpClient) { }
  //SERVICOS//
  getServicosList():Observable<any[]>{
    return this.http.get<any>(this.API+'/servico')
  };

  postServico(data:any){
    return this.http.post(this.API+'/servico',data);
  };
  getServicoPorClienteId(id:number):Observable<any[]>{
    return this.http.get<any>(this.API+`/cliente/servicos/${id}`)
  }
  updateServico(id:number|string,data:any){
    return this.http.put(this.API + `/Servico/${id}`, data)
  }
  deleteServico(id:number){
    return this.http.delete(this.API+`/Servico/${id}`)
  }
  //Equipamentos//
  getEquipamentoPorIdServicos(id:number):Observable<any[]>{
    return this.http.get<any>(this.API+`/equipamento/servicos/${id}`)
  };

  postEquipamento(data:any):Observable<any>{
    return this.http.post(this.API+'/equipamento',data)
  }

  //Clientes//
  getClientes():Observable<any[]>{
    return this.http.get<any>(this.API+'/cliente');
  }
  postCliente(cliente:any){
    return this.http.post<any>(this.API+'/cliente',cliente);

  }

  //Status//

  getStatus():Observable<any[]>{
    return this.http.get<any[]>(this.API+'/Status');
  }
}
