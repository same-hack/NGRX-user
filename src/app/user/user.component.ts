import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MyUserState } from './user.reducer';
import { selectUserAllInfo, selectUserAge } from './user.selector';
import {
  changeNameAction,
  countUpAction,
  countDownAction,
} from './user.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  /* ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
  select・・・STOREのデータを受け取るための記述

  変数名　= this.store.pipe(select(SELECTORで作成した変数));
  ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿　*/

  /**ユーザの全情報を取得 */
  user$ = this.store.pipe(select(selectUserAllInfo));
  /**ユーザの年齢を取得 */
  userAge$ = this.store.pipe(select(selectUserAge));

  constructor(private store: Store<MyUserState>) {}

  /* ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
  dispatch・・・STOREのデータを更新するための記述
  this.store.dispatch(アクション名());
  ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿　*/

  // STOREデータの更新
  countUp() {
    this.store.dispatch(countUpAction());
  }

  // STOREデータの更新
  countDown() {
    this.store.dispatch(countDownAction());
  }

  // STOREデータの更新
  changeName() {
    this.store.dispatch(changeNameAction());
  }

  ngOnInit(): void {}
}
