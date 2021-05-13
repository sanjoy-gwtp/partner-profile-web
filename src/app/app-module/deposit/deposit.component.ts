import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'core-component';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent extends BaseComponent implements OnInit {

  displayedColumns = ['id', 'toAccount','amount','paymentMethod','txnRequestStatus', 'actionsColumn'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  isDragStart: boolean = false;

  constructor(
    private router: Router,
    private apiService: ApiService) {
    super();
  }

  ngOnInit(): void {
    this.loadAllWithdraw();
  }

  loadAllWithdraw(): void {
    this.apiService.getPartnerCall("transaction-request/deposit/list", { params: [] }).subscribe((response: any) => {
      console.log('response', response);
      this.DataSource = new MatTableDataSource<Element>(response);
      this.DataSource.paginator = this.paginator;
      if (response) {
        this.Datas = response;
        this.TotalSize = this.Datas.length;
        this.iterator();
      }
    });
  }

  searchWithdraw(): void {

  }

  addWithdraw(): void {
    this.router.navigate(['/deposit']);
  }

}
