import { Component, OnInit } from '@angular/core';
import { faSync, faSave } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {
  alerta = 'alert-danger';
  propiedades = {
    danger: true
  };
  loading = false;

  faSync = faSync;
  faSave = faSave;
  icon = faSave;

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    this.icon = faSync;
    setTimeout(() => {
      this.loading = false;
      this.icon = faSave;
    }, 3000);
  }

}
