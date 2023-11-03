export async function Test() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div>test</div>;
}
