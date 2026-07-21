export default function Skills() {
  const tools = [
    { name: 'Visual Studio Code', type: 'Code Editor', icon: 'visualstudiocode' },
    { name: 'React JS', type: 'Framework', icon: 'react' },
    { name: 'MongoDB', type: 'Database', icon: 'mongodb' },
    { name: 'Tailwind CSS', type: 'Framework', icon: 'tailwindcss' },
    { name: 'Javascript', type: 'Language', icon: 'javascript' },
    { name: 'Node JS', type: 'Javascript Runtime', icon: 'nodedotjs' },
    { name: 'Github', type: 'Repository', icon: 'github' },
    { name: 'Figma', type: 'Design App', icon: 'figma' },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-head">
        <h2>Tools & Technologies</h2>
        <p>My Professional Skills</p>
      </div>
      <div className="tools-box">
        {tools.map((tool, idx) => (
          <div className="tool-card" key={idx}>
            <img src={tool.icon === 'visualstudiocode' ? '/visualstudiocode.svg' : `https://cdn.simpleicons.org/${tool.icon}/white`} alt={tool.name} />
            <div className="tool-info">
              <h4><span className="shiny-text">{tool.name}</span></h4>
              <p>{tool.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
