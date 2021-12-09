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
import { GenerarReclamoComponent } from './concesionaria/generar-reclamo/generar-reclamo.component';
import { ListadoGarantiasComponent } from './concesionaria/listado-garantias/listado-garantias.component';
import { ListaCotizacionesComponent } from './concesionaria/lista-cotizaciones/lista-cotizaciones.component';
import { GenerarCotizacionComponent } from './concesionaria/generar-cotizacion/generar-cotizacion.component';
import { VentaComponent } from './venta/venta.component';
import { CrearClienteComponent } from './concesionaria/crear-cliente/crear-cliente.component';
import { ListarClientesComponent } from './concesionaria/listar-clientes/listar-clientes.component';
import { TallerGuardGuard as guards} from './guards/taller-guard.guard';
import { EditarClienteComponent } from './concesionaria/editar-cliente/editar-cliente.component';




const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'venta', component: VentaComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'listarclientes', component: ListarClientesComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }},
  {path: 'creacion-cliente', component: CrearClienteComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }},
  { path: 'listar-garantias', component: ListadoGarantiasComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'editar-cliente', component: EditarClienteComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'cotizacion', component: GenerarCotizacionComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  {path: 'lista-cotizaciones', component: ListaCotizacionesComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] }},
  { path: 'reclamos-garantia', component: GenerarReclamoComponent, canActivate: [guard], data: { expectedRol: ['concesionaria'] } },
  { path: 'verificacion', component: VerificacionDocumentosComponent, canActivate: [guard], data: { expectedRol: ['comercializadora'] } },
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [guards], data: { expectedRol: ['taller'] } },
  

  { path: '**', redirectTo: '', pathMatch: 'full' },
  
  {path: 'vender', component: VentaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
