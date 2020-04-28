import { Injectable,ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private cfr: ComponentFactoryResolver) {}

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
  }

  async loadComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    const { GuestCardComponent } = await import('./guest-card/guest-card.component');

    const { UserCardComponent } = await import('./user-card/user-card.component');

    vcr.clear();
    let component : any = isLoggedIn ? UserCardComponent : GuestCardComponent;
   
    return vcr.createComponent(
      this.cfr.resolveComponentFactory(component))    
}}
