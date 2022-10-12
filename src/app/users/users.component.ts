import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Vinay'
    },
    {
      id: 2,
      name: 'Bose'
    },
    {
      id: 3,
      name: 'Chandra'
    }
  ];
}

