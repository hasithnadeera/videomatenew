import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogLayout({ children }) {
  return (
    <div className="blog-page-body">
      <div className="font-sans min-h-screen bg-gradient-to-b from-[#150A28] to-black">
        <Navbar />
        <main className="pt-36 pb-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}