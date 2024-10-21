import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdPortalComponent } from './std-portal.component';

describe('StdPortalComponent', () => {
  let component: StdPortalComponent;
  let fixture: ComponentFixture<StdPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
