import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-contact',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = {
    user_name: '',
    user_email: '',
    phone: '',
    message: ''
  };

  sendEmail() {
    if (!this.form.user_name || !this.form.user_email || !this.form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs.init('YOUR_PUBLIC_KEY');

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      this.form
    ).then(
      (result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.status, result.text);
        alert('Message sent successfully!');
        this.resetForm();
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Oops! Error sending message.');
      }
    );
  }

  resetForm() {
    this.form = {
      user_name: '',
      user_email: '',
      phone: '',
      message: ''
    };
  }

  loading = false;

// sendEmail() {
//   this.loading = true;
//   emailjs.send(...)
//     .finally(() => this.loading = false);
// }

}
