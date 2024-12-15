import Image from 'next/image';

const steps = [
  { 
    title: 'Plug in.',
    image: '/images/hero/plug.png',
    alt: 'Plug in icon'
  },
  { 
    title: 'Power up.',
    image: '/images/hero/power.png',
    alt: 'Power up icon'
  },
  { 
    title: 'Play.',
    image: '/images/hero/play.png',
    alt: 'Play icon'
  }
];

const SetupSteps = () => {
  return (
    <div className="text-gray-500 text-center font-thin w-full px-4">
      <h2 className="text-5xl mb-12">Easy to use</h2>
      <p className="text-2xl mb-16">Minimal setup required. Plug in, install, and you're ready to run.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-row lg:flex-col items-center justify-center">
            <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 flex-shrink-0 m-2">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="w-48 lg:w-72 flex items-center justify-center px-6 lg:px-0 lg:mt-8">
              <h3 className="text-4xl">{step.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupSteps;