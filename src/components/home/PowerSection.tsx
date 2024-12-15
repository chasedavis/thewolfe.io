import Image from 'next/image';
import Button from '../common/Button';

const PowerSection = () => {
  return (
    <div className="text-center w-full px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight mb-4 sm:mb-6 text-gray-500">
        Power when you need it
      </h2>
      <p className="text-base sm:text-lg md:text-xl font-extralight mb-8 sm:mb-12 max-w-xl mx-auto text-gray-400 leading-relaxed">
        Up to 10x the graphical computing power of the typical consumer laptop. You never have to buy a bulky desktop again.
      </p>
      
      <div className="flex justify-center mb-8 sm:mb-12 my-16 sm:my-24 mx-4 sm:mx-8">
        <Image
          src="/images/hero/fire.gif"
          alt="Power visualization"
          width={800}
          height={450}
          className="rounded-lg"
          priority
        />
      </div>

      <div className="mt-24 sm:mt-36">
        <Button href="/stats" variant="outline">
          See Performance Stats
        </Button>
      </div>
    </div>
  );
};

export default PowerSection;