export default function SkillsMarquee() {
  const topSkills = [
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', slug: 'css3' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'React', slug: 'react' },
    { name: 'Flutter', slug: 'flutter' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Figma', slug: 'figma' }
  ];
  const bottomSkills = [
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'PHP', slug: 'php' },
    { name: 'Laravel', slug: 'laravel' },
    { name: 'MySQL', slug: 'mysql' },
    { name: 'Firebase', slug: 'firebase' },
    { name: 'Supabase', slug: 'supabase' },
    { name: 'Git', slug: 'git' },
    { name: 'Docker', slug: 'docker' }
  ];

  const buildTrack = (skills) => {
    const tiles = skills.map((s, idx) => (
      <div className="skill-tile" key={idx}>
        <img src={`https://cdn.simpleicons.org/${s.slug}`} alt={`${s.name} logo`} loading="lazy" />
        <span>{s.name}</span>
      </div>
    ));
    // duplicate for seamless scrolling
    return [...tiles, ...tiles];
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-head">
        <div className="skills-eyebrow">Toolbox</div>
        <h2>Skills & Stack</h2>
        <p>Technologies I reach for when turning an idea into a working product.</p>
      </div>

      <div className="marquee-stack">
        <div className="marquee-row">
          <div className="marquee-track">
            {buildTrack(topSkills)}
          </div>
        </div>
        <div className="marquee-row reverse">
          <div className="marquee-track">
            {buildTrack(bottomSkills)}
          </div>
        </div>
      </div>
    </section>
  );
}
