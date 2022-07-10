import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureName, userReducer } from './user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Storeを使用できるようにする設定
    StoreModule.forRoot({ [featureName]: userReducer }),
    // デバッグツールのインポート
    StoreDevtoolsModule.instrument(),
  ],
})
export class UserModule {}
