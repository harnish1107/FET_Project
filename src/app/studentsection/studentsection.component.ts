import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentsection',
  templateUrl: './studentsection.component.html',
  styleUrls: ['./studentsection.component.css']
})
export class StudentsectionComponent {

  data: any;
  constructor(private http: HttpClient) {}
  getdata(): void {
    this.http.get('http://localhost:3000/profile').subscribe(data => {
      console.log(data)
      this.data = data;
    });
  }

}
