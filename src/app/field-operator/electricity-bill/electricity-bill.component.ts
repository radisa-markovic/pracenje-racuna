import { Component } from '@angular/core';

@Component({
  selector: 'app-electricity-bill',
  standalone: true,
  imports: [],
  templateUrl: './electricity-bill.component.html',
  styleUrl: './electricity-bill.component.scss'
})
export class ElectricityBillComponent {
  actualImage: any = {};

  confirmBill()
  {
    alert("Da li ste sigurni da su podaci tačni?");
  }

  uploadImage($event: any)
  {
    this.actualImage = URL.createObjectURL($event.target.files[0]);
  }
}
