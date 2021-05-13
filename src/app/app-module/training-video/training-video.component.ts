import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'core-component';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-training-video',
  templateUrl: './training-video.component.html',
  styleUrls: ['./training-video.component.css']
})
export class TrainingVideoComponent extends BaseComponent implements OnInit {
  trainingVideos: any;

  constructor(
    private router: Router,
    private apiService: ApiService) {
    super();
  }

  ngOnInit() {
    this.loadAllTrainingVideo();
  }

  loadAllTrainingVideo(): void {
    this.apiService.getPartnerCall("video/type/TRAINING", { params: [] }).subscribe((response: any) => {
      // console.log('response', response);
      this.trainingVideos = response;
    });
  }
}
