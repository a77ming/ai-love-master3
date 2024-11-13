import LoveMaster from '@/components/LoveMaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-purple-100">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 mt-16">
        <div className="w-full max-w-4xl">
          <LoveMaster />
        </div>
      </main>
      <Footer />
    </div>
  );
}