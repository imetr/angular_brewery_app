import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-fancy',
  templateUrl: './card-fancy.component.html',
  styleUrls: ['./card-fancy.component.scss']
})
export class CardFancyComponent implements OnInit {
  
  @Input() beer;
  constructor() { }

  ngOnInit(): void {
  }

}
