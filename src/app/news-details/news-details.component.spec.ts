import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsComponentComponent } from './news-details-component.component';

describe('NewsDetailsComponentComponent', () => {
  let component: NewsDetailsComponentComponent;
  let fixture: ComponentFixture<NewsDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
