import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private appService: AppService) {}

  private guestProfile() {
    return () =>
      import('./guest-card/guest-card.component').then(
        m => m.GuestCardComponent
      );
  }

  private clientProfile() {
    return () =>
      import('./user-card/user-card.component').then(
        m => m.UserCardComponent
      );
  }

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
  }

  loadComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    vcr.clear();

    return this.appService.forChild(vcr, {
      loadChildren: isLoggedIn ? this.clientProfile() : this.guestProfile()
    });
  }
}