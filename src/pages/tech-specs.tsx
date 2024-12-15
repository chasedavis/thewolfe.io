import Layout from '../components/Layout';
import SpecSection from '../components/tech-specs/SpecSection';
import Image from 'next/image';

const TechSpecs = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-normal text-center mb-16">Technical Specifications</h1>
          
          <div className="max-w-6xl mx-auto space-y-24">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 w-full">
                <SpecSection title="Physical">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-2"><span className="font-normal">Length:</span> 7.8 in (199.5 mm)</p>
                      <p className="mb-2"><span className="font-normal">Width:</span> 5.4 in (137.5 mm)</p>
                      <p className="mb-2"><span className="font-normal">Height:</span> 2.6 in (67.00 mm)</p>
                    </div>
                    <div>
                      <p className="mb-2"><span className="font-normal">Weight (Wolfe):</span> 2lb (908 g)</p>
                      <p className="mb-2"><span className="font-normal">Weight (Wolfe Pro):</span> 3.2 lb (1464 g)</p>
                      <p className="mb-2"><span className="font-normal">Material:</span> Injection Molded PC-ABS</p>
                    </div>
                  </div>
                </SpecSection>
              </div>
              <div className="relative w-full lg:w-144 aspect-[4/3] lg:flex-shrink-0">
                <Image
                  src="/images/techspec.png"
                  alt="Physical specifications"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="relative w-full lg:w-144 aspect-[4/3] lg:flex-shrink-0">
                <Image
                  src="/images/rear.png"
                  alt="Technical specifications"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <div className="flex-1 w-full">
                <SpecSection title="Technical">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-normal mb-4">Wolfe</h3>
                      <p className="mb-2"><span className="font-normal">GPU:</span> Nvidia GTX 1050</p>
                      <p className="mb-2"><span className="font-normal">I/O:</span> 3x DisplayPort, 1x HDMI, 1x DVI-I, 1x Thunderbolt</p>
                      <p><span className="font-normal">Power:</span> 220 Watt Mobile PSU</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-normal mb-4">Wolfe Pro</h3>
                      <p className="mb-2"><span className="font-normal">GPU:</span> Nvidia GTX 1060</p>
                      <p className="mb-2"><span className="font-normal">I/O:</span> 3x DisplayPort, 1x HDMI, 1x DVI-D, 1x DVI-I, 1x Thunderbolt</p>
                      <p><span className="font-normal">Power:</span> 220 Watt Mobile PSU</p>
                    </div>
                  </div>
                </SpecSection>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 w-full">
                <SpecSection title="Package Contents">
                  <ul className="list-disc list-inside space-y-2 font-light">
                    <li>Wolfe or Wolfe Pro</li>
                    <li>Software Key</li>
                    <li>Quickstart Guide</li>
                    <li>Thunderbolt Cable</li>
                    <li>220 Watt PSU</li>
                  </ul>
                </SpecSection>
              </div>
              <div className="relative w-full lg:w-144 aspect-[4/3] lg:flex-shrink-0">
                <Image
                  src="/images/techspec.png"
                  alt="Package contents"
                  fill
                  style={{ objectFit: 'contain', opacity: 0 }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechSpecs;