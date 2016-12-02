import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: '/app/mi-componente/mi-componente.template.html',
    inputs: ['nombre', 'inputs2'],
    outputs: ['enviarEdad']
})
export class MiComponente {
    nombre: string;
    enviarEdad: EventEmitter<any> = new EventEmitter();

    asignarEdad(str: string) {
        this.enviarEdad.emit(str);
    }
}