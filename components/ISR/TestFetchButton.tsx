export const TestFetchButton = () => {
  const clickHandler = () => {
    fetch("/api/test");
  };

  return (
    <div>
      <h2>テストボタン</h2>
      <button onClick={clickHandler}>Fetchテスト</button>
    </div>
  );
};
