export const currentTime = () => {
  const now = new Date();
  var Year = now.getFullYear();
  var Month = now.getMonth() + 1;
  var d = now.getDate();
  var Hour = now.getHours();
  var Min = now.getMinutes();
  var Sec = now.getSeconds();

  return Year + "年" + Month + "月" + d + "日" + Hour + ":" + Min + ":" + Sec;
};
