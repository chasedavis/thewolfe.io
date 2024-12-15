import Layout from '../components/Layout';
import BenchmarkChart from '../components/stats/BenchmarkChart';

const heavenData = [
  { name: 'Iris Pro 5200 (MBP 13)', value: 14 },
  { name: 'Wolfe', value: 32 },
  { name: 'Wolfe Pro', value: 74 },
];

const blenderData = [
  { name: 'R9 M370x (MBP 15)', value: 50 },
  { name: 'Wolfe', value: 430 },
  { name: 'Wolfe Pro', value: 950 },
];

export default function Stats() {
  return (
    <Layout>
      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">Performance Benchmarks</h1>
          
          <div className="space-y-24">
            <BenchmarkChart
              title="Heaven Benchmark"
              subtitle="A comprehensive GPU stress test. Representative of the frame rate increase you can expect for gaming."
              data={heavenData}
              valueLabel="Framerate (FPS)"
            />

            <BenchmarkChart
              title="Blenchmark"
              subtitle="A rendering benchmark for Blender. Representative of render time in professional applications."
              data={blenderData}
              valueLabel="% Speed Increase"
            />

            <div className="bg-gray-100 p-6 rounded-lg mt-12 max-w-4xl mx-auto">
              <p className="text-sm text-gray-600">
                Notes: MBP refers to the newest MacBook Pro. The R9 M370x is the upgraded GPU in the latest Macbook Pro 15". 
                The Iris Pro is the standard GPU. We used the upgraded GPU in BlenchMark because the Iris Pro was incapable 
                of running the tool. Heaven Benchmarks were run on an external display. Because of hardware limitations in 
                Thunderbolt 2, performance increases are lower on the internal display (this is not an issue for Thunderbolt 3 computers).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}