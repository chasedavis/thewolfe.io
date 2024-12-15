import Layout from '../components/Layout';
import Section from '../components/Section';
import UseCases from '../components/home/UseCases';
import SetupSteps from '../components/home/SetupSteps';
import PowerSection from '../components/home/PowerSection';
import PressBanner from '../components/home/PressBanner';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <Layout>
      <Section 
        id="hero"
        nextSectionId="power"
        backgroundImage="/images/hero/ramtin.jpg"
        isFirst
        showScrollArrow
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-6xl font-thin text-white text-center mx-4">
              Supercharge your laptop
            </h1>
          </div>
          <div id="pressbanner" className="flex-shrink-0 mb-24">
            <PressBanner />
          </div>
        </div>
      </Section>

      <Section 
        id="power"
        nextSectionId="usecases"
        showScrollArrow
      >
        <PowerSection />
      </Section>

      <Section 
        id="usecases"
        nextSectionId="setup"
        height="screen-1.5"
        className="relative"
      >
        <UseCases />
      </Section>

      <Section 
        id="setup"
        nextSectionId="onthego"
        className="bg-white relative"
        showScrollArrow
      >
        <SetupSteps />
      </Section>

      <Section 
        id="onthego"
        backgroundImage="/images/hero/wolfeportable.jpg"
      >
        <div className="h-full flex flex-col justify-center p-8 md:p-12">
          <div className="max-w-xl m-24 ml-auto">
            <h2 className="text-3xl md:text-4xl font-thin mb-4 text-white text-left">On the go</h2>
            <p className="text-lg md:text-xl font-thin text-white/90 text-left mb-8 max-w-lg">
              The Wolfe's compact form factor and mobile power supply allow you to take it wherever you go. Never feel tied to your desk again.
            </p>
            <Button href="/tech-specs" variant="outline">
              See Tech Specs
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}