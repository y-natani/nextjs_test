import { FC } from "react";
import { REVALIDATION_TIME } from "../../constants/common";
import { currentTime } from "../../helpers/time";

type PropTypes = {
  time?: string;
};

export const Time: FC<PropTypes> = ({ time = currentTime() }) => {
  return (
    <section>
      <h2>キャッシュ時間とか</h2>
      <div>現在のキャッシュ有効：{REVALIDATION_TIME}秒</div>
      <p>アクセス時間: {currentTime()}</p>
      <p>キャッシュ時間: {time}</p>
    </section>
  );
};
