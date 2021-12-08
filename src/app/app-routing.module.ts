import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { VerificacionDocumentosComponent } from './comercializadora/verificacion-documentos/verificacion-documentos.component';
import { GenerarReclamoComponent } from './generar-reclamo/generar-reclamo.component';
import { ListadoGarantiasComponent } from './listado-garantias/listado-garantias.component';
import { ListaCotizacionesComponent } from './lista-cotizaciones/lista-cotizaciones.component';
import { GenerarCotizacionComponent } from './generar-cotizacion/generar-cotizacion.component';
import { VentaComponent } from './venta/venta.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  { path: 'verificacion', component: VerificacionDocumentosComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['ROLE_COMERCIALIZADORA'] } },
  { path: 'reclamos', component: GenerarReclamoComponent, canActivate: [guard], data: { expectedRol: ['ROLE_CONCESONARIA'] } },
  { path: 'listar-garantias', component: ListadoGarantiasComponent, canActivate: [guard], data: { expectedRol: ['ROLE_CONCESONARIA'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  {path: 'lista', component: ListaCotizacionesComponent},
  {path: 'cotizacion', component: GenerarCotizacionComponent},
  {path: 'vender', component: VentaComponent},
  {path: 'listarclientes', component: ListarClientesComponent},
  {path: 'creacion-cliente', component: CrearClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }