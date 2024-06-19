import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {

  constructor(public dialog: MatDialog, private router: Router, private api: ApiService) { }

  id: string = "";
  phone: string = "";
  email: string = "";
  id_show: string = "";
  phone_show: string = "";

  id_correct: boolean = false;
  phone_correct: boolean = false;
  email_correct: boolean = true;

  error_id: string = "";
  error_phone: string = "";
  error_email: string = "";

  check_id() {
    if (this.id == "") {
      this.error_id = "กรุณากรอกหมายเลขบัตรประชาชน";
    } else if (this.id.length < 13) {
      this.error_id = "กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง";
    } else {
      this.error_id = "";
      this.id_correct = true
    }

  }

  check_phone() {
    if (this.phone == "") {
      this.error_phone = "กรุณากรอกเบอร์โทรศัพท์";
    } else if (this.phone.length < 10) {
      this.error_phone = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง";
    } else {
      this.error_phone = "";
      this.phone_correct = true
    }
  }

  check_email() {
    const pattern = /^[[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (this.email == "") {
      this.email_correct = true;
    } else if (!this.email.match(pattern)) {
      this.error_email = "กรุณากรอกอีเมลให้ถูกต้อง";
      this.email_correct = false;
    } else {
      this.email_correct = true;
    }
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      return false;
    }
    return true;
  }

  add_id(event: Event) {

    const inputValue = (event.target as HTMLInputElement).value;
    const sanitizedValue = inputValue.replace(/\D/g, ''); // ลบทุกตัวที่ไม่ใช่ตัวเลข
    
    if (sanitizedValue.length <= 13) {
      let formattedValue = '';
      for (let i = 0; i < sanitizedValue.length; i++) {
        if (i === 1 || i === 5 || i == 10 || i == 12) {
          formattedValue += '-';
        }
        formattedValue += sanitizedValue.charAt(i);
        
      }
      this.id_show = formattedValue;
      this.id = sanitizedValue
    }
  }

  // phone
  add_phone(event: Event) {

    const inputValue = (event.target as HTMLInputElement).value;
    const sanitizedValue = inputValue.replace(/\D/g, ''); // ลบทุกตัวที่ไม่ใช่ตัวเลข

    if (sanitizedValue.length <= 10) {
      let formattedValue = '';
      for (let i = 0; i < sanitizedValue.length; i++) {
        if (i === 3 || i === 6) {
          formattedValue += '-';
        }
        formattedValue += sanitizedValue.charAt(i);

      }
      this.phone_show = formattedValue;
      this.phone = sanitizedValue;
    }
  }

  remove_id() {
    this.id = "";
    this.id_show = "";
  }

  remove_phone() {
    this.phone = "";
    this.phone_show = "";
  }

  remove_email() {
    this.email = "";
    this.email_correct = true;
  }

  cancel() {
    // this.id = "";
    // this.phone = "";
    // this.email = "";
    // this.id_stat = false;
    // this.phone_stat = false;
    // this.email_correct = true;

    this.router.navigate(['verify-channel']);
  }

  OTP() {

    if (this.phone_correct == false || this.id_correct == false) {
      this.dialog.open(DialogComponent);
    }

    if (this.phone_correct == true && this.id_correct == true) {
      // this.postdata();
      // this.router.navigate(['verify']);
      console.log("id : " + this.id)
      console.log("phone : " + this.phone)

    }

  }

  path_reg = "register"
  path_OTP = "check_and_send_otp"

  postdata() {

    const Data = {
      uid: '10001', phone_number: this.phone, email: this.email, citizen_id: 'sss'
    };

    this.api.postapi(this.path_OTP, Data).subscribe((res: any) => {
      console.log(res);
    })
  }
}
