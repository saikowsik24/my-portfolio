import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor,NgIf } from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports:[FormsModule, HttpClientModule, NgIf, NgFor]
})

export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  formSubmitted = false;
  Email : string ="pdkv1999@gmail.com"
  constructor(private http: HttpClient) {}

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.form.valid) {
      const formspreeUrl = 'https://formspree.io/f/xldrlkep';
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = {
        ...this.formData,
        _replyto: this.formData.email,
        _subject: `New contact form message from ${this.formData.name}`,
        _to: 'saikowsik24@gmail.com'
      };

      this.http.post(formspreeUrl, body, { headers: headers }).subscribe(
        (response) => {
          console.log('Email sent successfully', response);
          alert('Thank you! Your message has been sent.');
          this.resetForm();
        },
        (error) => {
          console.error('Error sending email', error);
          alert('An error occurred. Please try again.');
        }
      );
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
    this.formSubmitted = false;

    if (this.contactForm) {
      this.contactForm.resetForm();
    }
  }
}
