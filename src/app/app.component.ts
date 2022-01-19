import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

//
export class AppComponent {
  title = 'The good Angular programmer';

  allUsers: User[] = [];
  oneUser: User = new User();

  constructor(private us: UserService) {
    this.allUsers = this.us.list;
  }

  onSelectClick(oneUser: User): void {
    this.oneUser = oneUser;
  }
  onUpdateClick(oneUser: User): void {
    this.us.updateUser(oneUser);
  }
  onDeleteClick(oneUser: User): void {
    this.us.removeUser(oneUser);
  }
}
