
import BlogSidebar from '@/components/BlogSidebar';

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex pt-16">
        <BlogSidebar />
        <main className="flex-grow p-4 md:ml-64">{children}</main>
      </div>
    </div>
  );
}