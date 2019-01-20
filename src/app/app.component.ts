import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from './modelos/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }

  texto: string = 'Insertar';

  productoSeleccionado: Producto = new Producto();

  listaProductos: Producto[] = [
    {id:1, nombre: 'Pelota', precio: 15, categoria: 'Deporte'},
    {id:2, nombre: 'Palo de golf', precio: 55, categoria: 'Deporte'},
    {id:3, nombre: 'Sudadera', precio: 25, categoria: 'Ropa'}
  ];


  altaoEdita(){

    if(this.productoSeleccionado.id == 0){
      this.productoSeleccionado.id = this.listaProductos.length+1;
      this.listaProductos.push(this.productoSeleccionado); 
    }
    this.productoSeleccionado = new Producto();
    this.texto='Insertar';
    
  }

  abrirEdicion(producto: Producto){
    this.texto = 'Editar';
    this.productoSeleccionado = producto;
  }

  eliminar(){
    this.listaProductos = this.listaProductos.filter(elemento => elemento != this.productoSeleccionado);
    this.productoSeleccionado = new Producto();
  }
}
