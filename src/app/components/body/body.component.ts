import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'El temor de un hombre sabio',
        autor: 'Patrick Rothfuss'
    }

    personajes: string[] = ['Kvothe', 'Denna', 'Fela'];
   
    nombre = 'Allan';
    apellido = 'Weisser';
}