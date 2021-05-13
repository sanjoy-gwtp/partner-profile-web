import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'core-component';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-content-video',
  templateUrl: './content-video.component.html',
  styleUrls: ['./content-video.component.css']
})
export class ContentVideoComponent extends BaseComponent implements OnInit {
  contentVideos: any;

  constructor(
    private router: Router,
    private apiService: ApiService) {
    super();
  }

  ngOnInit() {
    this.loadAllContentVideo();
  }

  loadAllContentVideo(): void {
    this.apiService.getPartnerCall("video/type/CONTENT", { params: [] }).subscribe((response: any) => {
      // console.log('response', response);
      this.contentVideos = response;
    });
  }
}
