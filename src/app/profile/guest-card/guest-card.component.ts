import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.css']
})
export class GuestCardComponent {
  constructor(private profileService: ProfileService) {}

  login() {
    this.profileService.login();
  }
}
