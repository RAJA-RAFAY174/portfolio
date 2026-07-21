export default function StaggerText({ text }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span 
          key={i} 
          className="stagger-word" 
          style={{ animationDelay: `${i * 0.03}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </>
  );
}
