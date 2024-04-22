import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ms365Component } from './ms365.component';

describe('Ms365Component', () => {
  let component: Ms365Component;
  let fixture: ComponentFixture<Ms365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ms365Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ms365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
