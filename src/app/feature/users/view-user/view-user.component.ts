import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  @Input() display: boolean = false;
  @Output() childEvent = new EventEmitter<any>();
  showDialog() {
      this.display = true;
  }

  hideDialog() {
      this.display = false;
  }
  constructor() { }

  ngOnInit(): void {
  
  }


  close(){
    this.display = false;
    this.childEvent.emit();
  }
}
