import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItManagedServiceComponent } from './it-managed-service.component';

describe('ItManagedServiceComponent', () => {
  let component: ItManagedServiceComponent;
  let fixture: ComponentFixture<ItManagedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItManagedServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItManagedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
