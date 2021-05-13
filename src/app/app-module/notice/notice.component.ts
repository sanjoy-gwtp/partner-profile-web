import { Component, OnInit } from '@angular/core';
import { ApiService } from 'core-component';
import { Notice } from 'src/app/models/Profile';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  notices:Notice;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      this.loadAllNotice();
  }

  loadAllNotice(){
    this.apiService.getPartnerCall("notice", { params: [] }).subscribe((response: any) => {
      console.log('response', response);
      this.notices=response;
    });
  }

}
