import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
  };
  error;
  onSubmit(ff) {
    return this.http
      .post('http://localhost:8000/api/signup', this.form)
      .subscribe(
        (data) => console.log(data),
        (errors) => this.handleError(errors)
      );
  }
  public errors = null;
  handleError(errors) {
    this.error = errors.error.errors;
  }
}
