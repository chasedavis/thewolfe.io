import Layout from '../components/Layout';
import Story from '../components/about/Story';
import Team from '../components/about/Team';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            <Story />
            <Team />
          </div>
        </div>
      </div>
    </Layout>
  );
}