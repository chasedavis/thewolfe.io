import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Dino Rodriguez',
    role: 'Co-Founder & CEO',
    bio: 'Dino has been a hardware enthusiast and gamer since childhood. At the age of 9, he built his first desktop computer, and at 13 his own electronic drum set from scratch. While at school, Dino has contracted for a Fortune 10 company and the Department of Energy. In addition to tinkering and working, he enjoys playing golf and Spikeball with friends.',
    imageUrl: '/images/team/dino.png'
  },
  {
    name: 'Christian Ondaatje',
    role: 'Co-Founder & CTO',
    bio: "'Christian's fascination with computers led him to engineer his first robot and his first video game by the age of 13. After working internationally for several firms, Christian attended Harvard to study computer science. As Wolfepack's resident technical expert, Christian is an asset in both physical and virtual construction. When he's not busy with some personal software project, Christian is probably in the ice rink or on the lacrosse field.",
    imageUrl: '/images/team/christian.png'
  },
  {
    name: 'Chase Davis',
    role: 'Co-Founder & Head of Design',
    bio: "Even before Chase's time at Harvard, he had a knack for building Hackintosh computers for design, gaming, and development. His hobbies led him to years of freelance design, startup marketing, and growing his own business from the ground up. Outside of his agile workflow and startup experience, he enjoys skiing, chess, and beating Dino and Christian in a not-too-friendly game of Spikeball.",
    imageUrl: '/images/team/chase (2).jpg'
  }
];

const Team = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-normal mb-16 text-center">The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            {...member}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;