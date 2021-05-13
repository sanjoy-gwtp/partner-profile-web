import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToasterService, ApiService, TokenStoreService } from 'core-component';
import { Partner } from 'src/app/models/Partner';
import { Profile } from 'src/app/models/Profile';
import { StoreService } from 'src/app/services/store.service';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  displayedColumns = ['id', 'customerName', 'mobileNumber','actionsColumn'];
  displayedColumnsTarget = ['level', 'target', 'achievement','achievementInPercentage'];
  public TargetDataSource: any;
  partner: Partner = new Partner();
  partners: Partner[];
  profile: Profile = new Profile();
  partnerNumber:string;
  total:Number=0;


  constructor(
    private apiService: ApiService,
    private toasterService: ToasterService,
    private storeService: StoreService,
    private tokenStore: TokenStoreService
  ) {
    super();
    this.loadProfile();
  }

  ngOnInit(): void {
    this.loadPartner()
    this.loadPartners(this.tokenStore.token.user_name)
  }

  loadPartner() {
    this.apiService.getPartnerCall(`partner/detail`).subscribe((data: any) => {
      // console.log(data);
      this.partner = data;
      this.storeService.partner = this.partner;
    },
      error => {
        console.log(error);
      });
  }

  loadProfile() {
    this.apiService.getPartnerCall(`profile/userid/${this.tokenStore.token.user_name}`).subscribe((data: any) => {
      this.profile = data;
    },
      error => {
        console.log(error);
      });
  }

  loadPartners(mobileNumber: string) {
    this.partnerNumber=mobileNumber;
    this.apiService.getPartnerCall(`partner/child/${mobileNumber}`).subscribe((response: any) => {
      this.DataSource = new MatTableDataSource<Element>(response);
      this.loadTarget(mobileNumber)
    });
  }

  loadTarget(mobileNumber: string) {
    this.total=0;
    this.apiService.getPartnerCall(`partner/target/${mobileNumber}`).subscribe((response: any) => {
      this.TargetDataSource = new MatTableDataSource<Element>(response);
      for(let target of response){
          this.total=this.total+target.achievement;
      }
    });
  }

}
