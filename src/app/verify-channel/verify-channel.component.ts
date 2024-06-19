import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-channel',
  templateUrl: './verify-channel.component.html',
  styleUrls: ['./verify-channel.component.css']
})
export class VerifyChannelComponent {

  constructor(private router: Router) { }

  register(){
    this.router.navigate(['/register']);
  }

  access_app(){
    this.router.navigate(['/access-app']);
  }
}
