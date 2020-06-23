import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() labelName;
  @Input() data;
  @Output() selectedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onchange(event) {
    console.log(event);
    this.selectedItem.emit({ selectedItem: event })
  }
}
