import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
