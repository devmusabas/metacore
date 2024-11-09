import Footer from './Footer';
import Header from './Header';

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
