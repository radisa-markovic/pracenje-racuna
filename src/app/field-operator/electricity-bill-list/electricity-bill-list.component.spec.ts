import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityBillListComponent } from './electricity-bill-list.component';

describe('ElectricityBillListComponent', () => {
  let component: ElectricityBillListComponent;
  let fixture: ComponentFixture<ElectricityBillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricityBillListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricityBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
