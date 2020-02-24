import { Component, OnInit } from '@angular/core';
import { CounterService } from "../../services/counter.service.ts";

@Component({
  selector: 'app-up-arrow',
  templateUrl: './up-arrow.component.html',
  styleUrls: ['./up-arrow.component.css']
})
export class UpArrowComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

}