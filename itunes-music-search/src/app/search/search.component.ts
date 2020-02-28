import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators }from "@angular/forms";
import { Subject, throwError } from 'rxjs';

import { map, debounceTime, distinctUntilChanged, switchMap, catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
