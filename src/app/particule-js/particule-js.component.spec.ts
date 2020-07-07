import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticuleJsComponent } from './particule-js.component';

describe('ParticuleJsComponent', () => {
  let component: ParticuleJsComponent;
  let fixture: ComponentFixture<ParticuleJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticuleJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticuleJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
