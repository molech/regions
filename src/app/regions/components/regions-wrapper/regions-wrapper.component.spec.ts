import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsWrapperComponent } from './regions-wrapper.component';

describe('RegionsWrapperComponent', () => {
  let component: RegionsWrapperComponent;
  let fixture: ComponentFixture<RegionsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
