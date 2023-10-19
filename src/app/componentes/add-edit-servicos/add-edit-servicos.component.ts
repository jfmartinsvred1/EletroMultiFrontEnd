import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  formulario!:FormGroup

  constructor(
    private service:ServicosApiService,
    private router:Router,
    private formBuilder:FormBuilder
    ){}

  ngOnInit(): void {
    this.clienteList$=this.service.getClientes();
    this.statusList$=this.service.getStatus();
    this.formulario=this.formBuilder.group({
      clienteId:[,Validators.compose([
        Validators.required
      ])],
      statusId:[,Validators.compose([Validators.required])]

    })
  }

  addServico(){
    console.log(this.formulario.get('statusId')?.errors)
    if(this.formulario.valid){
      this.service.postServico(this.formulario.value).subscribe(()=>{
        this.router.navigate(['/servicos']);
      });
    }

    
  }
  

}
