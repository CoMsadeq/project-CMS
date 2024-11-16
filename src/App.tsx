import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedWork from './components/FeaturedWork';
import WorkTogether from './components/WorkTogether';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedWork />
        <WorkTogether />
      </main>
      <Footer />
    </div>
  );
};

export default App;