import { Component, inject } from '@angular/core';
import { ElectricityBillService } from '../electricity-bill.service';
import { ElectricityBill } from '../../electricity-bill';

@Component({
  selector: 'app-electricity-bill-list',
  standalone: true,
  imports: [],
  templateUrl: './electricity-bill-list.component.html',
  styleUrl: './electricity-bill-list.component.scss'
})
export class ElectricityBillListComponent {
  billsService = inject(ElectricityBillService);
  electricityBills: ElectricityBill[] = [];

  constructor()
  {
    this.billsService.getElectricityBills().then((bills) => {
      this.electricityBills = bills;
    });
  }
  
}
