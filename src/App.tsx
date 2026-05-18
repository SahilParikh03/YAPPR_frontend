/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Solution />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

