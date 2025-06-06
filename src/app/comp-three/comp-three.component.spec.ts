import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompThreeComponent } from './comp-three.component';

describe('CompThreeComponent', () => {
  let component: CompThreeComponent;
  let fixture: ComponentFixture<CompThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompThreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
