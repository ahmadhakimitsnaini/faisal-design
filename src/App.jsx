import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioGallery } from './components/portfolio/PortfolioGallery';
import { FeatureWithImageComparison } from './components/ui/FeatureWithImageComparison';

const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      {/* Hero Section with Image Comparison */}
      <section className="min-h-[70vh] flex flex-col justify-center">
        <FeatureWithImageComparison />
      </section>

      {/* Featured Work - Portfolio Gallery */}
      <PortfolioGallery title="Featured Works" archiveButton={{ text: "View All Projects", href: "/work" }} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="py-8 px-12 border-b border-vintage-black/10">
          <nav className="flex justify-between items-center max-w-[1600px] mx-auto w-full">
            <div className="font-serif font-bold text-3xl tracking-tighter uppercase">STD.</div>
            <ul className="flex gap-8 text-base uppercase tracking-widest font-semibold text-vintage-gray">
              <li className="hover:text-vintage-black transition-colors cursor-pointer">Work</li>
              <li className="hover:text-vintage-black transition-colors cursor-pointer">About</li>
            </ul>
            <button className="hidden md:block bg-vintage-red text-vintage-cream px-8 py-3 uppercase tracking-wider text-base font-bold hover:bg-vintage-black transition-colors">
              Let's Work
            </button>
          </nav>
        </header>

        <main className="flex-grow max-w-[1600px] mx-auto w-full px-12 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer className="py-8 text-center border-t border-vintage-black/10 text-vintage-gray text-sm">
          <p>© {new Date().getFullYear()} Sam Thomas Design. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
