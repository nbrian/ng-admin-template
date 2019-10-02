import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeModuleDetailComponent } from './some-module-detail.component';

describe('SomeModuleDetailComponent', () => {
  let component: SomeModuleDetailComponent;
  let fixture: ComponentFixture<SomeModuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeModuleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeModuleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
