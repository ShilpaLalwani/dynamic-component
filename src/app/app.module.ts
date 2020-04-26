import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileHostDirective } from './profile/profile-host.directive';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, ProfileHostDirective, ProfileComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule {}