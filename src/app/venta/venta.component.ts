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


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();
  facturaCuerpo: FacturaCuerpo= new FacturaCuerpo();
  facturaForm: FormGroup
  cliente: Cliente = new Cliente();
  vehiculos: any;
  facturas:any;

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
    this.BuscarVehiculo();
    this.facturaForm = this.fb.group({
      id_factura:[''],
      tipo:['', Validators.required],
      fecha:[''],
      id_cliente:[''],
      subtotal:['',Validators.required],
      iva:['',Validators.required],
      total:['',Validators.required],
      placa:['',Validators.required]


    });;

    this.DatosCliente();
    this.vehiculosService.getAllVehiculos().subscribe(resp =>{
      this.vehiculos = resp;
    },
     error => {console.error(error)}
    );
  }


  Guardar(facturaCuerpo:FacturaCuerpo){
    this.detalleService.createDetalle(facturaCuerpo)
    .subscribe(data=>{
      alert("Se agrego con exito");
    })
  }

  Editar(vehiculo:Vehiculo):void{
    localStorage.setItem("id", vehiculo.placa);
    this.router.navigate(["editar-cliente"]);
  }

  BuscarVehiculo(){
    let id=localStorage.getItem("id");
    this.vehiculosService.getVehiculoId(+id)
    .subscribe(data=>{
      this.vehiculo=data;
    })

  }

  GuardarFactura(): void{
    this.facturaService.saveFactura(this.facturaForm.value).subscribe(resp =>{
      alert("detalle guardado");
      this.facturaForm.reset();
      this.facturas=this.facturas.filter(factura => resp.id!==factura.id);
      this.facturas.push(resp);
    },
      error => {console.error(error)}
    )
  }

  

  DatosCliente(){
    let id=localStorage.getItem("id");
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })
  }
}
