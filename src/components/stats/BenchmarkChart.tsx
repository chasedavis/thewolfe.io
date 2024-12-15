import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

interface BenchmarkChartProps {
  title: string;
  subtitle: string;
  data: Array<{ name: string; value: number }>;
  valueLabel: string;
}

const BenchmarkChart: React.FC<BenchmarkChartProps> = ({ title, subtitle, data, valueLabel }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-center max-w-xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-normal text-gray-700 mb-4">{title}</h2>
        <p className="text-gray-500 font-light">{subtitle}</p>
      </div>
      
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 35 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis 
                type="number" 
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={100}
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#6B7280' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  padding: '0.75rem'
                }}
                labelStyle={{ color: '#374151', fontWeight: 500 }}
                itemStyle={{ color: '#6B7280' }}
              />
              <Legend 
                verticalAlign="bottom"
                height={36}
                wrapperStyle={{
                  paddingTop: '20px',
                  width: '100%',
                  textAlign: 'center',
                  color: '#6B7280'
                }}
              />
              <Bar 
                dataKey="value" 
                fill="#93c5fd"
                name={valueLabel}
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkChart;