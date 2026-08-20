import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StructureToFinish from '@/components/StructureToFinish';
import ReformasIntegrales from '@/components/ReformasIntegrales';
import ServiceExplorer from '@/components/ServiceExplorer';
import ArabicCraft from '@/components/ArabicCraft';
import ImageExpand from '@/components/ImageExpand';
import MaterialDetail from '@/components/MaterialDetail';
import Gallery from '@/components/Gallery';
import TypographicMoment from '@/components/TypographicMoment';
import Process from '@/components/Process';
import Trust from '@/components/Trust';
import Marbella from '@/components/Marbella';
import Contact from '@/components/Contact';
import Proposal from '@/components/Proposal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StructureToFinish />
        <ReformasIntegrales />
        <ServiceExplorer />
        <ArabicCraft />
        <ImageExpand />
        <MaterialDetail />
        <Gallery />
        <TypographicMoment />
        <Process />
        <Trust />
        <Marbella />
        <Contact />
        <Proposal />
      </main>
      <Footer />
    </>
  );
}
