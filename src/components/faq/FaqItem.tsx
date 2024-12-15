import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="bg-gray-50 rounded-lg">
          <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left">
            <span className="font-medium">{question}</span>
            <ChevronUpIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-6 pb-4 text-gray-600">
            {answer}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default FaqItem;