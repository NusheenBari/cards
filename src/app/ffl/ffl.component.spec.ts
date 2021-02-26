import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FflComponent } from './ffl.component';

describe('FflComponent', () => {
  let component: FflComponent;
  let fixture: ComponentFixture<FflComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FflComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
