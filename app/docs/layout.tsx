import Navbar from '@/components/Navbar';
import DocsSidebar from '@/components/DocsSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex pt-16">
        <DocsSidebar />
        <main className="flex-grow p-4 md:ml-64">{children}</main>
      </div>
    </div>
  );
}