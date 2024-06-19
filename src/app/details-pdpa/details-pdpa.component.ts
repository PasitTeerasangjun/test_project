import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-pdpa',
  templateUrl: './details-pdpa.component.html',
  styleUrls: ['./details-pdpa.component.css']
})
export class DetailsPdpaComponent {

  @Input() name: any;
  @Output() update_stats = new EventEmitter<boolean> ();

  constructor() { }

  back() {
    this.update_stats.emit(true);
  }

}
