import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  data: any;
  attendanceData: any[] = [];

  constructor(private http: HttpClient, private router:Router) {
    this.username = '';
    this.password = '';
    this.message = '';
  }

  login(): void {
    if (this.username === 'faculty' && this.password === 'faculty') {
      this.message = 'Login Successful !!!!';
      this.getdata();
    } else {
      this.message = 'Invalid Username Or Password !!!!'
    }
  }

  getdata(): void {
    this.http.get('http://localhost:3000/posts').subscribe(data => {
      console.log(data)
      this.data = data;
    });
  }

  submitAttendance(): void {
    const attendanceList = document.querySelectorAll('.attendance:checked');
    if (attendanceList.length > 0) {
      attendanceList.forEach((attendance: any) => {
        const attendanceValue = attendance.value;
        const id = attendance.getAttribute('name')?.split('-')[1];
        const name = this.data.find((item: any) => item.id === id)?.name || '';
        this.attendanceData.push({ id, name, action: attendanceValue });
      });
      this.http.post('http://localhost:3000/profile', JSON.stringify(this.attendanceData), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(() => {
        alert('Attendance submitted successfully');
        this.attendanceData = [];
      });
    } else {
      alert('Please select attendance');
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
