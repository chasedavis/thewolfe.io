import Layout from '../components/Layout';
import FaqItem from '../components/faq/FaqItem';

const faqs = [
  {
    question: "What is the Wolfe?",
    answer: "The Wolfe is a device that speeds up your laptop. More specifically, the Wolfe gives you a performance boost in gaming, rendering, 3D modeling, cryptocurrency mining, virtual reality, or any other graphics intensive task. From a more technical standpoint, the Wolfe is a GPU that plugs into your computer via Thunderbolt."
  },
  {
    question: "What is a GPU?",
    answer: "A GPU (or \"Graphics Processing Unit\") is a computer chip that contains hundreds of microprocessors, together capable of trillions of operations per second. This makes it far better than a standard computer chip (CPU) at things like gaming and 3D rendering."
  },
  {
    question: "Why do I need the Wolfe?",
    answer: "If you are a gamer, professional, or power-user, the Wolfe will dramatically improve your laptop experience. Gamers - have you ever experienced choppy frame rates? Or been totally incapable of using virtual reality or playing a certain game on your laptop? The Wolfe fixes that - giving you a smooth, enjoyable experience. Professionals - do you deal with slow render times, lag, or reduced interactivity when you are not using a desktop? The Wolfe fixes that too, by giving your laptop the power it needs to become your workstation.\n\nNote: the Wolfe Pro is recommended for Virtual Reality."
  },
  {
    question: "Does this speed up everything?",
    answer: "No - the Wolfe will not speed up your internet, web browsing, document editing, etc. As a GPU, it can only boost applications that make use of hardware acceleration. Check out this comprehensive list of applications that can make use of the Wolfe."
  },
  {
    question: "How do I get one?",
    answer: "Sign up here to be the first to know when the Wolfe is available!"
  },
  {
    question: "How much faster is my computer with the Wolfe?",
    answer: "This depends on your computer - more specifically on its GPU. The typical laptop user can expect performance increases up to 500% with the Wolfe, or up to 1000% with the Wolfe Pro. Older computers will see even more dramatic performance gains - up to 2000%. See our performance breakdown for more info."
  },
  {
    question: "Why does my laptop not already have this level of performance?",
    answer: "Due to the size constraints inherent in portable computers, laptop GPUs are greatly underpowered. With the Wolfe you can stay portable, without sacrificing performance."
  },
  {
    question: "How does the Wolfe work?",
    answer: "In simple terms - your computer sends all the hardest work to the Wolfe, and it deals with it much faster. On a technical level, Thunderbolt combines two types of data into one cable - DisplayPort (for your screen) and PCIe (for your Graphics Card). This allows us to send data from your laptop to the Wolfe, which then processes that data and outputs it as high-quality graphics to display on your screen."
  },
  {
    question: "How do I set it up?",
    answer: "Setup is incredibly easy - our Wolfepack software allows you to install the Wolfe in one click. All you need to do is plug the Wolfe in and run the installer. From then on, just plug in the Wolfe and you're ready to go!"
  },
  {
    question: "Can I swap in my own GPU?",
    answer: "We are modders at heart - you're welcome to take apart the Wolfe to try different GPUs (and they very well could work). Please understand, however, that this will void any warranty. We also hope to have an unofficial forum for all Wolfe users - including modders and hackers."
  },
  {
    question: "What's the difference between internal and external display?",
    answer: "\"Internal Display\" refers to your laptop screen. \"External Display\" refers to an external monitor or VR headset. With Thunderbolt 3, you should not see any significant difference in performance between the two."
  }
];

export default function FAQ() {
  return (
    <Layout>
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}