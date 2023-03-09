import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsNewComponent } from './jobs-new.component';

describe('JobsNewComponent', () => {
  let component: JobsNewComponent;
  let fixture: ComponentFixture<JobsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
