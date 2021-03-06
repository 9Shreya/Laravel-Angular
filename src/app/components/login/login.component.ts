import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public form = {
    email: null,
    password: null,
  };

  ngOnInit(): void {}
  onSubmit(loginForm) {
    return this.http
      .post('http://localhost:8000/api/login', this.form)
      .subscribe(
        (data) => console.log(data),
        (error) => this.handleError(error)
      );
  }
  public error = null;
  handleError(error) {
    this.error = error.error.error;
  }
}
