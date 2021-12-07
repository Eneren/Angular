import { ComponentFixture, TestBed } from '@angular/core/testing';

import { favoriteVotersComponent } from './favorite-voters.component';

describe('favoriteVotersComponent', () => {
  let component: favoriteVotersComponent;
  let fixture: ComponentFixture<favoriteVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ favoriteVotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(favoriteVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});