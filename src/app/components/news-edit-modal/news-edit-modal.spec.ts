import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEditModal } from './news-edit-modal';

describe('NewsEditModal', () => {
  let component: NewsEditModal;
  let fixture: ComponentFixture<NewsEditModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEditModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEditModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
