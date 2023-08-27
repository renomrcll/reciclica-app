import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {

  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;

  @Input() status: string = '';
  @Input() updatedAt: string = '2023-01-01 00:00:00';
  @Input() createdAt: string = '2023-01-01 00:00:00';
  @Input() notes: string = '';
  @Input() value: string = '';
  constructor() { }

  ngOnInit() {}

}
