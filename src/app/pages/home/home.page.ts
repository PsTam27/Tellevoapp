import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isDeslizado = false;

  toggleDeslizar() {
    this.isDeslizado = !this.isDeslizado;
  }
}
