import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
  @Input() dataList: User[] = [];
  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  dataRow: User = new User();

  onSelectClick(user: User): void {
    this.dataRow = user;
    this.selectClick.emit(this.dataRow);
  }
  onUpdateClick(user: User): void {
    this.updateClick.emit(this.dataRow);
  }
  onDeleteClick(user: User): void {
    this.deleteClick.emit(this.dataRow);
  }
}
