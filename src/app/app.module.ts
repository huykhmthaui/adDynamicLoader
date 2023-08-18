import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner.component';
import { JobAdComponent } from './job-ad.component';
import { ProfileComponent } from './profile.component';
import { AdService } from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    JobAdComponent,
    ProfileComponent,
    AdDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
