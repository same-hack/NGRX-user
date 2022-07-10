/* ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
SELECTOR
  ・STOREのデータを取得（連携）するための処理
　  　イメージ的には、getter()のようなもの。
  ・STOREデータ　→　コンポーネント
  　の単方向データバインディングが行われる

createSelector(
  State,(全てのstate情報) => 欲しいデータを取り出す)
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿　*/
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MyUserState, featureName } from './user.reducer';

export const selectUserState = createFeatureSelector<MyUserState>(featureName);

/**ユーザの全情報を取得するセレクター */
export const selectUserAllInfo = createSelector(
  selectUserState,
  (state) => state
);

/**ユーザの年齢情報を取得するセレクター */
export const selectUserAge = createSelector(
  selectUserState,
  (state) => state.age
);
