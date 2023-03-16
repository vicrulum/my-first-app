import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmentTwoComponent } from './assigment-two.component';

describe('AssigmentTwoComponent', () => {
  let component: AssigmentTwoComponent;
  let fixture: ComponentFixture<AssigmentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigmentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigmentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
