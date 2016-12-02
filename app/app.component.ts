import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hola soy el componente padre</h1>
      <h2>Y la edad de mi hijo es: {{edadhijo}}</h2>
      <input type="text" [(ngModel)]="nombrehijo">
      <mi-componente [nombre]="nombrehijo"  (enviarEdad)="edadhijo = $event" ></mi-componente>
  
  `,
})
export class AppComponent {
    nombrehijo: string;
    edadhijo: string;

}
