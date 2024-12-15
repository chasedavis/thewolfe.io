import UseCaseCard from './UseCaseCard';
import { useCases } from './constants/useCases';

const UseCases = () => {
  return (
    <div className="w-screen absolute left-1/2 -translate-x-1/2 h-full flex flex-col">
      {useCases.map((useCase, index) => (
        <UseCaseCard
          key={index}
          {...useCase}
        />
      ))}
    </div>
  );
};

export default UseCases;