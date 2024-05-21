import { Injectable } from '@angular/core';
import { ElectricityBill } from '../electricity-bill';

@Injectable({
  providedIn: 'root'
})
export class ElectricityBillService {  
  private billsURL: string = "http://localhost:3000/electricityBills"; 

  constructor() { }

  async getElectricityBills()
  {
    let response = await(fetch(this.billsURL));
    return await response.json();;
  }

  async addNewElectricityBill(newElectricityBill: ElectricityBill)
  {

  }
}
