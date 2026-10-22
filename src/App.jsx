import { TopBar, Header } from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { Products, Maintenance, Business, Why, Tips, Summary } from './components/Sections.jsx';
import Gallery from './components/Gallery.jsx';
import References from './components/References.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ImagesProvider } from './lib/images.jsx';

export default function App() {
  return (
    <ImagesProvider>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <Maintenance />
        <Business />
        <References />
        <Why />
        <Tips />
        <Summary />
        <Contact />
      </main>
      <Footer />
    </ImagesProvider>
  );
}
