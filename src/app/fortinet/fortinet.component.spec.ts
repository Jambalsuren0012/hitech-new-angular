import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortinetComponent } from './fortinet.component';

describe('FortinetComponent', () => {
  let component: FortinetComponent;
  let fixture: ComponentFixture<FortinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FortinetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
