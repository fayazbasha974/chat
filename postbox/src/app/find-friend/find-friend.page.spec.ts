import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindFriendPage } from './find-friend.page';

describe('FindFriendPage', () => {
  let component: FindFriendPage;
  let fixture: ComponentFixture<FindFriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFriendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
