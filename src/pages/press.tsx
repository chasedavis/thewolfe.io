import Layout from '../components/Layout';
import PhotoGallery from '../components/press/PhotoGallery';

const pressPhotos = [
  {
    src: '/images/hero/ramtin.jpg',
    alt: 'Press photo 1',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/hero/chris.jpg',
    alt: 'Press photo 2',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/hero/caroline.jpg',
    alt: 'Press photo 3',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/hero/Darkroom2.jpg',
    alt: 'Dark Room Setup',
    width: 1920,
    height: 1080
  }
];

const productPhotos = [
  {
    src: '/images/hero/wolfeportable.jpg',
    alt: 'Product photo 1',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/techspec.png',
    alt: 'Product photo 2',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/rear.png',
    alt: 'Product photo 3',
    width: 1920,
    height: 1080
  }
];

const teamPhotos = [
  {
    src: '/images/team/dino.png',
    alt: 'Dino Rodriguez - Co-Founder & CEO',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/team/christian.png',
    alt: 'Christian Ondaatje - Co-Founder & CTO',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/team/chase (2).jpg',
    alt: 'Chase Davis - Co-Founder & Head of Design',
    width: 1920,
    height: 1080
  }
];

const extraPhotos = [
  {
    src: '/images/extra/CPUvsGPU.jpg',
    alt: 'CPU vs GPU Comparison',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/extra/Dark+Room+Game.png',
    alt: 'Dark Room Game Screenshot',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/extra/IMG_5953.jpg',
    alt: 'Product Development Photo',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/extra/IMG_5959 (1).jpg',
    alt: 'Product Development Photo 2',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/extra/IMG_5968.jpg',
    alt: 'Product Development Photo 3',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/extra/IMG_6012.jpg',
    alt: 'Product Development Photo 4',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/extra/IMG_6058.jpg',
    alt: 'Product Development Photo 5',
    width: 1920,
    height: 1080
  },
  {
    src: '/images/extra/WolfeLogo (1) copy.png',
    alt: 'Wolfe Logo',
    width: 1920,
    height: 1080
  }
];

export default function Press() {
  return (
    <Layout>
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-normal text-center mb-16">Press Resources</h1>
          
          <div className="max-w-6xl mx-auto">
            <PhotoGallery title="Press" photos={pressPhotos} />
            <PhotoGallery title="Product" photos={productPhotos} />
            <PhotoGallery title="Team" photos={teamPhotos} />
            <PhotoGallery title="Additional Resources" photos={extraPhotos} />
          </div>
        </div>
      </div>
    </Layout>
  );
}