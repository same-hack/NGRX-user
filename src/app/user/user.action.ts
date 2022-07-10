/* ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
ACTION
  各アクションがどこで呼ばれて、どのような処理をするのかを記述
  引数が必要であれば、ここで定義する。

  基本的にデバッグツールのログ確認用途で役に立ちます。

  createAction(`[呼び出されるコンポーネント名]関数名`, props等のオプション)
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿　*/

import { createAction } from '@ngrx/store';

export const countUpAction = createAction(`[User Component] countUpAction`);
export const countDownAction = createAction(`[User Component] countDownAction`);
export const changeNameAction = createAction(
  `[User Component] changeNameAction`
);
