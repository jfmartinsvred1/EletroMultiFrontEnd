import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicosApiService } from 'src/app/servicos-api.service';

@Component({
  selector: 'app-add-edit-clientes',
  templateUrl: './add-edit-clientes.component.html',
  styleUrls: ['./add-edit-clientes.component.css']
})
export class AddEditClientesComponent implements OnInit{

  clientesList$!:Observable<any[]>;
  formulario!:FormGroup

  constructor(
    private service:ServicosApiService,
    private formBuilder:FormBuilder,
    private router:Router
    ){}


  ngOnInit(): void {
    this.clientesList$=this.service.getClientes();
    this.formulario=this.formBuilder.group({
      nome:['',[Validators.required]],
      documentoId:[''],
      numDocumento:['',Validators.compose([
        Validators.required,
        Validators.minLength(11)
      ])],
      numero:['',[Validators.required]],
      email:['',Validators.compose(
        [
          Validators.required,
          Validators.email
        ]
        )]
    })
  }
  
  addCliente(){
    console.log(this.formulario.get('cpf')?.errors)
    if(this.formulario.valid){
      this.service.postCliente(this.formulario.value).subscribe(()=>{
        this.router.navigate(['/clientes'])
      });
    }
  }

}
