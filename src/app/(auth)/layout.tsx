export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Auth Route</h1>
      <main>{props.children}</main>
    </div>
  );
}
