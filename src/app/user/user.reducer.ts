import { createReducer, on } from '@ngrx/store';
import { __asyncGenerator } from 'tslib';
import {
  countUpAction,
  countDownAction,
  changeNameAction,
} from './user.action';

export const featureName = 'user';

// 型の定義
export interface MyUserState {
  name: string;
  age: number;
}

/**初期値の設定　※これをSTOREで状態管理する */
export const initialState: MyUserState = {
  name: 'サメハック',
  age: 100,
};

/**実際にSTOREのSTATEを操作する処理

createReducer(
  initialState,
  on(アクション名, (state,{ 受け取った引数 }) => ({
    STATEの更新処理,
  })),
 */
const _userReducer = createReducer(
  initialState,
  on(countUpAction, (state) => ({
    ...state,
    age: state.age + 1,
  })),
  on(countDownAction, (state) => ({
    ...state,
    age: state.age - 1,
  })),
  // 今回更新した処理
  on(changeNameAction, (state, { newName }) => ({
    ...state,
    name: newName,
  }))
);

export function userReducer(state: any, action: any): MyUserState {
  return _userReducer(state, action);
}
