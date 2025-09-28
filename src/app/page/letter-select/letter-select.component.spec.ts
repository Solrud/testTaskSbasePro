import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSelectComponent } from './letter-select.component';

describe('LetterSelectComponent', () => {
  let component: LetterSelectComponent;
  let fixture: ComponentFixture<LetterSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
