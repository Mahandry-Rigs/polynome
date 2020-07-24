import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinomeComponent } from './trinome.component';

describe('TrinomeComponent', () => {
  let component: TrinomeComponent;
  let fixture: ComponentFixture<TrinomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrinomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
