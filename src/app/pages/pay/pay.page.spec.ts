import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PayPage } from './pay.page';

describe('PayPage', () => {
  let component: PayPage;
  let fixture: ComponentFixture<PayPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
