import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  showDetails: boolean;
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  passwordPolicies: any;

  constructor(
    private fb: FormBuilder) {
  }
  async ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: this.checkPasswords
      });
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('newPassword').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const oldPassword = this.form.get('oldPassword').value;
        const newPassword = this.form.get('newPassword').value;
        const confirmPassword = this.form.get('confirmPassword').value;
        // this.tokenService.login(username, password).subscribe(data=>{

        // })
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  update(passwordPolicies: any) {

  }

}
