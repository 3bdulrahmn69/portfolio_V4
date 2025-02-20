import Header from '../ui/header';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="mt-8">
        <Header />
      </div>
      {children}
    </div>
  );
}
