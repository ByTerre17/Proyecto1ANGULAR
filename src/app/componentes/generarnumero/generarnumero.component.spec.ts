import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarnumeroComponent } from './generarnumero.component';

describe('GenerarnumeroComponent', () => {
  let component: GenerarnumeroComponent;
  let fixture: ComponentFixture<GenerarnumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarnumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarnumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
