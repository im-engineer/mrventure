import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';  // ← Add this
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">  {/* pt-20 for fixed navbar */}
          {children}
        </main>
        <Footer />  {/* ← Add Footer here */}
      </body>
    </html>
  );
}