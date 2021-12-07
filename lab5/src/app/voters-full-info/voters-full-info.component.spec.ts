import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersFullInfoComponent } from './voters-full-info.component';

describe('VotersFullInfoComponent', () => {
  let component: VotersFullInfoComponent;
  let fixture: ComponentFixture<VotersFullInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotersFullInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});