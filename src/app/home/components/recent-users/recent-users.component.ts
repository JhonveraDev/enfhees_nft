import { Component } from '@angular/core';
import { RecentUser } from '../../interfaces/home.interfaces';

@Component({
  selector: 'app-recent-users',
  templateUrl: './recent-users.component.html',
  styleUrls: ['./recent-users.component.css']
})
export class RecentUsersComponent {
  recentUsers: RecentUser[] = [
    { name: 'Gallante J.', items: 340, elements: 11.3, views: 4.1, avatar: '../../../../assets/avatar_30.png' },
    { name: 'Debit A.', items: 760, elements: 4.1, views: 12.3, avatar: '../../../../assets/avatar_31.png' },
    { name: 'Johnny E.', items: 760, elements: 1.3, views: 8.1, avatar: '../../../../assets/avatar_32.png' },
    { name: 'Mark J.', items: 40, elements: 11.5, views: 4, avatar: '../../../../assets/avatar_33.png' },
    { name: 'Hostetter R.', items: 885, elements: 15.4, views: 6.6, avatar: '../../../../assets/avatar_34.png' },
    { name: 'John P.', items: 769, elements: 8.3, views: 8.9, avatar: '../../../../assets/avatar_35.png' },
    { name: 'Austin R.', items: 842, elements: 15.6, views: 12.9, avatar: '../../../../assets/avatar_36.png' },
    { name: 'Michael L.', items: 150, elements: 18.9, views: 7.1, avatar: '../../../../assets/avatar_37.png' },
  ]
}
