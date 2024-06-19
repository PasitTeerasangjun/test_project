import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allow-access-app',
  templateUrl: './allow-access-app.component.html',
  styleUrls: ['./allow-access-app.component.css']
})
export class AllowAccessAppComponent {

  constructor(private router: Router) { }

  toverify() {
    this.router.navigate(['/verify-channel']);
  }
}
