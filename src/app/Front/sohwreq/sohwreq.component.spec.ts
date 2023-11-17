import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SohwreqComponent } from './sohwreq.component';

describe('SohwreqComponent', () => {
  let component: SohwreqComponent;
  let fixture: ComponentFixture<SohwreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SohwreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SohwreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
