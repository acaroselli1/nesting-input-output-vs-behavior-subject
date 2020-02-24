import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from "../../services/counter.service.ts";

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})

export class ArrowsComponent implements OnInit {
  @Input() dataUpArrow;
  constructor(public counterService: CounterService) { }

  

  ngOnInit() {
  }

}