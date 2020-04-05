import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupLoginPage } from './signup-login.page';

describe('SignupLoginPage', () => {
  let component: SignupLoginPage;
  let fixture: ComponentFixture<SignupLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
