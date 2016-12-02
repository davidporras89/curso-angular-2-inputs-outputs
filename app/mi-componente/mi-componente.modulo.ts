import { NgModule } from '@angular/core';
import { MiComponente } from './mi-componente.componente';

@NgModule({
    exports: [MiComponente],
    declarations: [MiComponente]
})
export class MiComponenteModulo { }