import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() data: {name: string, value: number}[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("changed");
  }
}
