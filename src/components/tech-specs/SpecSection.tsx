interface SpecSectionProps {
  title: string;
  children: React.ReactNode;
}

const SpecSection: React.FC<SpecSectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        {children}
      </div>
    </section>
  );
};

export default SpecSection;