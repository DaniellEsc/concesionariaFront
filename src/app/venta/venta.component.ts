import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculosService } from '../services/vehiculos/vehiculos.service';
import { Cliente } from '../models/Cliente';
import { ClientesService } from '../services/clientes/clientes.service';
import { DetalleService } from '../services/detalle/detalle.service';
import { Router } from '@angular/router';
import { Vehiculo } from '../models/Vehiculo';
import { FacturaCabecera } from '../models/FacturaCabecera';
import { FacturaCuerpo } from '../models/FacturaCuerpo';
import { FacturaService } from '../services/factura/factura.service';
import { FilterVehiculosPipe } from '../pipes/filter-vehiculos.pipe';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  vehiculos: Vehiculo = new Vehiculo();
  detalleForm: FormGroup
  cliente: Cliente = new Cliente();
  facturaCuerpo: FacturaCuerpo =  new FacturaCuerpo();
  facturaCabecera: FacturaCabecera =  new FacturaCabecera();
  
  facturas:any;
  detalles:any;
  vehiculo:any;

  filterPost='';

  constructor(
    public fb: FormBuilder,
    public vehiculosService : VehiculosService,
    public detalleService: DetalleService,
    public facturaService:FacturaService,
    private service:ClientesService,
    public detaller:DetalleService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    
    this.detalleForm = this.fb.group({
      id_detalle:[''],
      subtotal:['',Validators.required],
      iva:['',Validators.required],
      total:['',Validators.required],
      placa:['',Validators.required]
    });;

    this.DatosCliente();
    this.EncontrarVehiculo();

    this.vehiculosService.getAllVehiculos().subscribe(resp =>{
      this.vehiculos = resp;
    },
     error => {console.error(error)}
    );
  }


  Guardar(){
    this.facturaService.createFactura(this.facturaCabecera)
    .subscribe(data=>{
      
    })
    this.detalleService.createDetalle(this.facturaCuerpo)
    .subscribe(data=>{
      
      alert("Se agrego con exito");
    })
    
  }

  //Pruba guaradar placa en la tabla de factura cuerpo
  GuardarDetalle(): void{
    this.detalleService.saveDetalles(this.detalleForm.value).subscribe(resp=>{
      this.detalleForm.reset();
      
    },
    error =>{console.log(error)}
    )

  }


  //metodo no funcional no guarda los datos de la factura
  GuardarFactura(): void{
    this.detalleService.saveDetalles(this.detalleForm.value).subscribe(resp =>{
      alert("detalle guardado");
      this.detalleForm.reset();
      this.detalles=this.detalles.filter(detalle => resp.id!==detalle.id);
      this.detalles.push(resp);
    },
      error => {console.error(error)}
    )
  }

  

  //datos traidos del componente listar clientes  ingreso de datos en inputs
  DatosCliente(){
    let id=localStorage.getItem("id");
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })
  }



  //no vale traer los datos para el vehiculo de la tabla 
  ElegirVehiculo(vehiculo:Vehiculo):void{
    localStorage.setItem("id", vehiculo.placa.toString());
    
  }

  //metodo para recuperar los datos del vehiculo metodo no funcional
  EncontrarVehiculo(){
    let id=localStorage.getItem("id");
    this.vehiculosService.getVehiculoId(+id)
    .subscribe(data=>{
     
    })
  }


}


