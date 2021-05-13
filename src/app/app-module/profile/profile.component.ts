import { MaxSizeValidator } from '@angular-material-components/file-input';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, TokenStoreService } from 'core-component';
import { Observable, Subject } from 'rxjs';
import { PaymentMethod, TransactionRequest } from 'src/app/models/Product';
import { NIDType, Profile } from 'src/app/models/Profile';
import { StoreService } from 'src/app/services/store.service';
import { BaseComponent } from '../BaseComponent';
import { ProfileImageDialogComponent } from './profile-image-dialog/profile-image-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends BaseComponent implements OnInit {
  profileForm: FormGroup;
  profile: Profile = new Profile();
  nidTypes = Object.values(NIDType).filter(value => typeof value !== 'number');
  title: string = "Edit Profile";
  profileImageSize: number = 500;
  search_str: string = 'base64,';


  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private router: Router,
    private tokenStore: TokenStoreService,
    private fb: FormBuilder, public dialog: MatDialog) {
    super();
    this.createForm();
    this.profileForm.controls['userId'].disable();
  }

  createForm() {
    this.profileForm = this.fb.group({
      userId: ['', Validators.required],
      fatherName: [null, Validators.required],
      motherName: [null, Validators.required],
      // spouseName: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      // bloodGroup: [null, Validators.required],
      // profession: [null, Validators.required],
      nidType: [null, Validators.required],
      nid: [null, Validators.required],
      dob: [null, Validators.required],
      presentAddress: [null, Validators.required],
      permanentAddress: [null, Validators.required],
      mailingAddress: [null, Validators.required],
      nomineeName: [null, Validators.required],
      nomineePhoneNumber: [null, Validators.required],
      // dealerArea: [null, Validators.required],
      // position: [null, Validators.required],
      image: [null, [Validators.required, MaxSizeValidator(this.profileImageSize * 1024)]],
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.apiService.getPartnerCall(`profile/userid/${this.tokenStore.token.user_name}`).subscribe((data: any) => {
      // console.log(data);
      this.profile = data;
      // this.profile.userId = this.tokenStore.token.user_name;
    },
      error => {
        console.log(error);
      });
  }

  saveProfile(profile: Profile) {
    // if (!this.profileForm.valid) {
    //   return;
    // }
    // this.setImage();
    console.log(this.profile);
    this.apiService.postPartnerCall("profile", this.profile).subscribe(
      data => {
        console.log("Profile save :" + data);
      }
    );
  }

  setImage() {
    const file = this.profileForm.get('image').value;
    if (file) {
      Promise.all([this.getPromiseImageFile(file)]).then((result: any) => {
        console.log(result);
        if (result) {
          this.profile.image = result[0].imageString;
          this.profile.imageName = result[0].imageName;
          this.profile.imageType = result[0].imageType;
          console.log(this.profile);
        }
      });
    }
  }

  getPromiseImageFile(file: any) {
    return new Promise((resolve, rejects) => {
      this.readFile(file).subscribe(
        r => {
          resolve({
            imageString: r.substring(r.indexOf(this.search_str) + this.search_str.length),
            imageName: file.name,
            imageType: file.type
          });
        },
        e => {
          rejects({ imageString: 'ERROR' });
          console.log('file ', e);
        });
    });
  }

  readFile(file: File): Observable<any> {
    const sub = new Subject<any>();
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const content = reader.result;
      sub.next(content);
      sub.complete();
    };
    reader.readAsDataURL(file);
    return sub.asObservable();
  }

  uploadProfileImage(e: any) {
    console.log(e);
    this.setImage();
  }


  showProfileImagePopup(e: any) {
    e.preventDefault();
    const dialogRef = this.dialog.open(ProfileImageDialogComponent, {
      // width: '550px',
      data: this.profile
    });
  }

}
