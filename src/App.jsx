import { Reviews, Footer, Hero, Services, Tutors, Subscribe, ContactUs } from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
     <Nav/>
    <section className="x1:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <Tutors/>
    </section>
    <section className="padding bg-pale-blue">
      <Reviews/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <ContactUs/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x ">
      <Footer/>
    </section>
  </main>
)

export default App; 