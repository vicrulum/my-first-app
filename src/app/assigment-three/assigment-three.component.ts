import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment-three',
  templateUrl: './assigment-three.component.html',
  styleUrls: ['./assigment-three.component.css']
})
export class AssigmentThreeComponent implements OnInit {
  showSecret = true;
  clickLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleText(){
    this.showSecret = !this.showSecret;
    this.clickLog.push('Button has been clicked at: ' + new Date())
  }


}
