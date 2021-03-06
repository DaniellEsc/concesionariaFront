import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';

import { InformeRechazoComponent } from './comercializadora/informe-rechazo/informe-rechazo.component';
import { VerificacionDocumentosComponent } from './comercializadora/verificacion-documentos/verificacion-documentos.component';

import { VentaComponent } from './venta/venta.component';
import { GenerarReclamoComponent } from './concesionaria/generar-reclamo/generar-reclamo.component';
import { CrearClienteComponent } from './concesionaria/crear-cliente/crear-cliente.component';
import { GenerarCotizacionComponent } from './concesionaria/generar-cotizacion/generar-cotizacion.component';
import { ListaCotizacionesComponent } from './concesionaria/lista-cotizaciones/lista-cotizaciones.component';
import { ListarClientesComponent } from './concesionaria/listar-clientes/listar-clientes.component';
import { ListadoGarantiasComponent } from './concesionaria/listado-garantias/listado-garantias.component';
import { EditarClienteComponent } from './concesionaria/editar-cliente/editar-cliente.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterVehiculosPipe } from './pipes/filter-vehiculos.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    VerificacionDocumentosComponent,
    InformeRechazoComponent,
    GenerarReclamoComponent,
    CrearClienteComponent,
    GenerarCotizacionComponent,
    VentaComponent,
    ListaCotizacionesComponent,
    ListarClientesComponent,
    ListadoGarantiasComponent,
    EditarClienteComponent,
    FilterPipe,
    FilterVehiculosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
