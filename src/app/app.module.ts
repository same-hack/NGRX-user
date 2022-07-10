import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent, UserComponent],
  // ユーザモジュールのインポート
  imports: [BrowserModule, AppRoutingModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
