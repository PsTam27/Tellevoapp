import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordCodePage } from './password-code.page';

describe('PasswordCodePage', () => {
  let component: PasswordCodePage;
  let fixture: ComponentFixture<PasswordCodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasswordCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
