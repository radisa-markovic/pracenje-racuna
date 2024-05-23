import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ElectricityBillComponent } from "./field-operator/electricity-bill/electricity-bill.component";
import { ElectricityBillListComponent } from "./field-operator/electricity-bill-list/electricity-bill-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ElectricityBillComponent, ElectricityBillListComponent, RouterLink]
})
export class AppComponent {
  title = 'pracenje-racuna';
}
