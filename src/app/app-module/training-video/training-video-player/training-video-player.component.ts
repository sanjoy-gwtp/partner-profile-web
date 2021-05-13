import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-video-player',
  templateUrl: './training-video-player.component.html',
  styleUrls: ['./training-video-player.component.css']
})
export class TrainingVideoPlayerComponent implements OnInit {

  @Input() videoId: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.videoId);
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
