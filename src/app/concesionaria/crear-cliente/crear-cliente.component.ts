import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../../services/clientes/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  clienteForm: FormGroup;
  clientes:any;

  constructor(
    public fb: FormBuilder,
    public clienteService: ClientesService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      id_cliente: [''],
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],

    });
  }

  guardar(): void{
    this.clienteService.saveClientes(this.clienteForm.value).subscribe(resp =>{
      alert("cliente actualizado");
      this.router.navigate(["listarclientes"]);
      this.clienteForm.reset();
      this.clientes=this.clientes.filter(cliente => resp.id!==cliente.id);
      this.clientes.push(resp);
    },
      error => {console.error(error)} 
    )
  }

}
