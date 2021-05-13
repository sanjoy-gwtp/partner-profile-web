import { Injectable } from '@angular/core';
import { Partner } from '../models/Partner';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  partner: Partner;

  constructor() {
    console.log("Partner Store ..")
  }
}
