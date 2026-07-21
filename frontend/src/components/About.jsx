import { useRef, useState, useCallback } from 'react';
import StaggerText from './StaggerText';
import cardImage from '../assets/card.jpeg';

export default function About() {
  const badgeRef = useRef(null);
  const lanyardRef = useRef(null);
  const startRef = useRef({ x: 0, y: 0 });
  const [revealed, setRevealed] = useState(false);
  const [dragging, setDragging] = useState(false);

  const THRESHOLD = 50;
  const BASE_LANYARD_HEIGHT = 120;

  const updateBadge = useCallback((dx, dy) => {
    if (!badgeRef.current || !lanyardRef.current) return;
    const damp = 0.6;
    const stretch = Math.max(0, dy) * damp;
    badgeRef.current.style.transform = `translate(${dx * damp}px, ${Math.max(0, dy) * damp}px)`;
    lanyardRef.current.style.height = (BASE_LANYARD_HEIGHT + stretch) + 'px';
  }, []);

  const resetBadge = useCallback(() => {
    if (!badgeRef.current || !lanyardRef.current) return;
    badgeRef.current.style.transform = '';
    lanyardRef.current.style.height = BASE_LANYARD_HEIGHT + 'px';
  }, []);

  const reveal = useCallback(() => {
    setRevealed(true);
    setDragging(false);
    resetBadge();
  }, [resetBadge]);

  const onPointerDown = useCallback((e) => {
    if (revealed) return;
    setDragging(true);
    startRef.current = { x: e.clientX, y: e.clientY };
    e.target.setPointerCapture(e.pointerId);
  }, [revealed]);

  const onPointerMove = useCallback((e) => {
    if (!dragging || revealed) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    updateBadge(dx, dy);
    if (dist > THRESHOLD) {
      reveal();
    }
  }, [dragging, revealed, updateBadge, reveal]);

  const onPointerUp = useCallback(() => {
    setDragging(false);
    if (!revealed) resetBadge();
  }, [revealed, resetBadge]);

  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            <StaggerText text="I'm Rafay, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like  cloud-based development, blending creativity with precision to deliver impactful solutions. With over four months of experience and more than 6 completed projects." />
          </p>
          
          <div className={`stats-row ${revealed ? 'is-revealed' : ''}`}>
            <div className="stat-item">
              <h4>6+<span>+</span></h4>
              <p>Project Finished</p>
            </div>
            <div className="stat-item">
              <h4>4<span>+</span></h4>
              <p>Months of Experience</p>
            </div>
            <div className="stat-item">
              <h4>3.20<span>/4.00</span></h4>
              <p>CGPA</p>
            </div>
          </div>
        </div>
        
        <div className="id-badge-container">
          <div className="lanyard" ref={lanyardRef}></div>
          <div 
            className={`id-badge ${dragging ? 'is-dragging' : ''} ${revealed ? 'is-revealed' : ''}`}
            ref={badgeRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className="id-badge-clip"></div>
            <img src={cardImage} alt="ID Photo" className="id-photo" />
            <div className="id-title">Full Stack</div>
            <div className="id-subtitle">Web Development</div>
            <div className={`drag-hint ${revealed ? 'is-hidden' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              Drag this
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
