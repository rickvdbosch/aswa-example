import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const baseUrl: string = environment.baseApiUrl;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'Azure Static Web Apps';
  public values$: Observable<Array<string>>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.values$ = this.httpClient.get<Array<string>>(`${baseUrl}values`);
  }
}
