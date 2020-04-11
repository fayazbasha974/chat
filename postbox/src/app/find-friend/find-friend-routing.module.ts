import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindFriendPage } from './find-friend.page';

const routes: Routes = [
  {
    path: '',
    component: FindFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindFriendPageRoutingModule {}
