import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private SERVER_URL = 'http://localhost:3001/';

  constructor(private httpClient: HttpClient) { }

  public postData(data: any) {
    const url = `${this.SERVER_URL}data`;
    return this.httpClient.post(url, data);
  }
  
}
