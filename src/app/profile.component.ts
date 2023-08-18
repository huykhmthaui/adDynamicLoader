import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
    template:`
    <div class="profile">
        <h3>Featured Profile</h3>
        <h4>{{data.name}}</h4>

        <p>{{data.bio}}</p>

        <strong>Hire this employee today!</strong>
    </div>
    `
})
export class ProfileComponent implements AdComponent {
    @Input() data: any;
}