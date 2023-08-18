import { Injectable } from "@angular/core";

import { JobAdComponent } from "./job-ad.component";
import { ProfileComponent } from "./profile.component";
import { AdItem } from "./ad-item";

@Injectable()
export class AdService {
    getAds() {
        return [
          new AdItem(
            ProfileComponent,
            { name: 'Bombasto', bio: 'Brave as they come' }
          ),
          new AdItem(
            ProfileComponent,
            { name: 'Dr. IQ', bio: 'Smart as they come' }
          ),
          new AdItem(
            JobAdComponent,
            { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
          ),
          new AdItem(
            JobAdComponent,
            { headline: 'Openings in all departments', body: 'Apply today' }
          )
        ];
      }
}