import { Component, OnInit,Input,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {

  @Input() title;
  @Input() rname;
  @Input() occupation;
  @Input() location;
  @Input() first;

  @Output() display = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    this.display.emit(`Name: ${this.rname}
    Occupation: ${this.occupation}
    Based In: ${this.location}
    First Appearance: ${this.first}`);
  }
  
}
