import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolacemindComponent } from './solacemind.component';

describe('SolacemindComponent', () => {
  let component: SolacemindComponent;
  let fixture: ComponentFixture<SolacemindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolacemindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolacemindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
