import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Button} from '../models/button.model';
import {AppCode} from '../models/appcode.model';


@Injectable()
export class ButtonListService {
    buttonsUrl = 'assets/data.json';
    multiselectedUrl = 'http://localhost:60050/api/audit';

  constructor(private http: HttpClient) { }

  /** GET buttons from the server */
  getButtonList (): Observable<Button[]> {
    return this.http.get<Button[]>(this.buttonsUrl);
  }

  /** GET multiselected from the server */
  getMultiList (): Observable<AppCode[]> {
    return this.http.get<Array<AppCode>>(this.multiselectedUrl);
    //return this.loadAppCodes();
  }
  



}

