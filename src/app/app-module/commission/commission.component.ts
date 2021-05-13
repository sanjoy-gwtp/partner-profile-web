import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {

  title:string="Commission";
  pdfSrc:string;

  constructor() { }

  ngOnInit(): void {
    this.pdfSrc = environment.resourceBasePartnerUrl+"file";
  }

}
