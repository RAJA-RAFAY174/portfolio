import StaggerText from './StaggerText';
import ppImage from '../assets/pp.jpeg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          <div className="shiny-text">Hi I'm Rafay</div>
        </h1>
        <div className="hero-desc">
          <StaggerText text="I'm Rafay, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like cloud-based development, blending creativity with precision to deliver impactful solutions." />
        </div>
        <div className="btn-group">
          <a href="/cv.pdf" download="Rafay_Ali_CV.pdf" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            <span className="shiny-text">Download CV</span>
          </a>
          <a href="#project" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            <span className="shiny-text">Explore My Projects</span>
          </a>
        </div>
      </div>
      
      <div className="profile-card-wrapper">
        <div className="pc-card">
          <div className="pc-inside">
            <div className="pc-avatar-content">
              <img src={ppImage} alt="Profile" className="avatar" />
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <img src={ppImage} alt="" className="pc-mini-avatar" />
                  <div>
                    <div className="pc-handle">@rafay.dev</div>
                    <div className="pc-status">● Online</div>
                  </div>
                </div>
                <a href="#contact" className="pc-contact-btn">Contact Me</a>
              </div>
            </div>
            <div className="pc-details">
              <h3>Rafay</h3>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
