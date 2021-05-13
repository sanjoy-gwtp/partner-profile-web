import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'core-component';
import { PaymentMethod, TransactionRequest } from 'src/app/models/Product';
import { BaseComponent } from '../../BaseComponent';

@Component({
  selector: 'app-add-deposit',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddDepositComponent extends BaseComponent implements OnInit {
  transactionRequestForm: FormGroup;
  transactionRequest: TransactionRequest = new TransactionRequest();
  paymentMethords:PaymentMethod[]=[];
  paymentMethord:PaymentMethod= { id: null, name: null,number:null };
  id: string;
  addingNew: boolean = false;
  title: string = "Add Deposit";

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
    super();
    this.createForm();
    this.transactionRequest.paymentMethod = { id: null, name: null,number:null};
  }

  createForm() {
    this.transactionRequestForm = this.fb.group({
      amount: ['', Validators.required],
      paymentMethod: [null, Validators.required],
      fromAccount: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadPaymentMethord();
  }

  loadPaymentMethord(){
    this.apiService.getPartnerCall(`payment-method`).subscribe((data: any) => {
      this.paymentMethords = data;
    },
      error => {
        console.log(error);
      });

  }

  onBackClick(): void {
    this.router.navigate(['/deposits']);
  }

  saveTransactionRequest(transactionRequest: TransactionRequest) {
    if (!this.transactionRequestForm.valid) {
      return;
    }
    this.apiService.postPartnerCall("transaction-request/deposit", transactionRequest).subscribe(
      data => {
        console.log("Withdraw save :" + data);
        this.router.navigate(['/deposits']);
      }
    );
  }

}