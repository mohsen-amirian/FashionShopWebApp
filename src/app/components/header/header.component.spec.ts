import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authServicestub: Partial<AuthenticationService>;

  beforeEach(async () => {

    authServicestub = {
      logout: () => {},
      isLoggedIn: () => {return true},
      getCurrentUser: () => {return {}}
    };

    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {provide: AuthenticationService, useValue: authServicestub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    let authService = TestBed.inject(AuthenticationService);

    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should show logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();
  });

  fit('should show home-btn', () => {
    expect(fixture.nativeElement.querySelector('[data-test="home-btn"]')).toBeTruthy();
  });

  fit('should show users-btn', () => {
    expect(fixture.nativeElement.querySelector('[data-test="users-btn"]')).toBeTruthy();
  });

  fit('should show welcome-text', () => {
    expect(fixture.nativeElement.querySelector('[data-test="welcome-text"]')).toBeTruthy();
  });

  fit('should show login-btn', () => {
    expect(fixture.nativeElement.querySelector('[data-test="login-btn"]')).toBeTruthy();
  });
});
