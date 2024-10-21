import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeStdntComponent } from './welcome-stdnt.component';

describe('WelcomeStdntComponent', () => {
  let component: WelcomeStdntComponent;
  let fixture: ComponentFixture<WelcomeStdntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeStdntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeStdntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
