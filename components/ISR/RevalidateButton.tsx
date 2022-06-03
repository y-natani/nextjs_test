export const RevalidateButton = () => {
  const clickHandler = () => {
    fetch("/api/revalidate");
  };

  return (
    <div>
      <h2>全ページのキャッシュを削除します</h2>
      <button onClick={clickHandler}>Revalidate</button>
    </div>
  );
};
