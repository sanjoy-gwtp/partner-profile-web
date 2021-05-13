import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepositComponent } from './add.component';

describe('AddDepositComponent', () => {
  let component: AddDepositComponent;
  let fixture: ComponentFixture<AddDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
