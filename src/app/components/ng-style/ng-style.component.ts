import { Component, OnInit } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      estiquta de prueba
    </p>

    <button class="btn btn-outline-primary" (click)="tamano = tamano + 5 ">
     <fa-icon [icon]="faPlus"></fa-icon>
    </button>

    <button class="btn btn-outline-danger" (click)="tamano = tamano - 5 ">
     <fa-icon [icon]="faMinus"></fa-icon>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano = 40;
  faMinus = faMinus;
  faPlus = faPlus;
  constructor() { }

  ngOnInit() {
  }

}
