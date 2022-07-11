/* ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
ACTION
  各アクションがどこで呼ばれて、どのような処理をするのかを記述
  引数が必要であれば、ここで定義する。

  基本的にデバッグツールのログ確認用途で役に立ちます。

  createAction(
    `[呼び出されるコンポーネント名]関数名`,
    props<{ 引数名: 型}>()
  )
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿　*/

import { createAction, props } from '@ngrx/store';

export const countUpAction = createAction(`[User Component] countUpAction`);
export const countDownAction = createAction(`[User Component] countDownAction`);
export const changeNameAction = createAction(
  `[User Component] changeNameAction`,
  props<{ newName: string }>()
);
