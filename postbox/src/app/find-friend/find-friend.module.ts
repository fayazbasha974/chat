import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindFriendPageRoutingModule } from './find-friend-routing.module';

import { FindFriendPage } from './find-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindFriendPageRoutingModule
  ],
  declarations: [FindFriendPage]
})
export class FindFriendPageModule {}
