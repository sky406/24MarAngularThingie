import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnavComponent } from './tnav.component';

describe('TnavComponent', () => {
  let component: TnavComponent;
  let fixture: ComponentFixture<TnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
