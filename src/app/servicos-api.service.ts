import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosApiService {
  
readonly servicosAPIURL="https://localhost:7075/Servico"

  constructor(private http:HttpClient) { }
  
  getServicosList():Observable<any[]>{
    return this.http.get<any>(this.servicosAPIURL)
  }
  postServico(data:any){
    return this.http.post(this.servicosAPIURL,data);
  }
}
