import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss'],
})
export class DataRowComponent implements OnInit {
  @Input() dataRow: User = new User();

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelectClicked(dataRow: User): void {
    this.selectClick.emit(dataRow);
  }
  onUpdateClicked(dataRow: User): void {
    this.updateClick.emit(dataRow);
  }
  onDeleteClicked(dataRow: User): void {
    this.deleteClick.emit(dataRow);
  }
}
