import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeModuleComponent } from './some-module.component';

describe('SomeModuleComponent', () => {
  let component: SomeModuleComponent;
  let fixture: ComponentFixture<SomeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
