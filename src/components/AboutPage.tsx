import './AboutPage.css';
import BackgroundTexture from './BackgroundTexture.svg';
import Sponsor1 from '../assets/sp1.png';
import Sponsor2 from '../assets/sp2.png';
import Sponsor3 from '../assets/sp3.png';
import Sponsor4 from '../assets/sp4.png';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Background Texture */}
      <div className="about-background">
        <img src={BackgroundTexture} alt="" className="about-texture" />
      </div>

      {/* Sponsor Logos */}
      <div className="sponsor-logo sponsor-1">
        <img src={Sponsor1} alt="Sponsor 1" />
      </div>
      <div className="sponsor-logo sponsor-2">
        <img src={Sponsor2} alt="Sponsor 2" />
      </div>
      <div className="sponsor-logo sponsor-3">
        <img src={Sponsor3} alt="Sponsor 3" />
      </div>
      <div className="sponsor-logo sponsor-4">
        <img src={Sponsor4} alt="Sponsor 4" />
      </div>

      {/* Stats Card 1 - Projects */}
      <div className="stats-card card-1">
        <h2 className="stats-number">85+</h2>
        <p className="stats-label">Projects</p>
      </div>

      {/* Stats Card 2 - Happy Clients */}
      <div className="stats-card card-2">
        <h2 className="stats-number">50+</h2>
        <p className="stats-label">Happy Clients</p>
      </div>

      {/* Stats Card 3 - Experts Team */}
      <div className="stats-card card-3">
        <h2 className="stats-number">10+</h2>
        <p className="stats-label">Experts Team</p>
      </div>

      {/* Sun Image */}
      <div className="sun-image-container">
        <img src="/sun.png" alt="Sun Mountain" className="sun-image" />
      </div>

      {/* Quote Text */}
      <div className="quote-container">
        <p className="quote-text">
          Every project is more than just a brief - it's a new chapter waiting to be written.
          Together, we've crafted tales that inspire, connect, and endure.
        </p>
      </div>

      {/* Montage Text */}
      <div className="montage-text-container">
        <p className="montage-text">
          A montage of familiar faces and names.
        </p>
      </div>

      {/* Stories Description */}
      <div className="stories-description-container">
        <p className="stories-description-text">
          Some stories come from the biggest names. Others begin with bold, rising voices.
          We've been fortunate to walk alongside both - listening, creating, and building stories that matter.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
