import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickySideBarComponent } from './sticky-side-bar.component';

describe('StickySideBarComponent', () => {
  let component: StickySideBarComponent;
  let fixture: ComponentFixture<StickySideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickySideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
