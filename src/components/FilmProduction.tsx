import './FilmProduction.css';
import BackgroundTexture from './BackgroundTexture.svg';
import FilmImage from '../assets/film_productions/main.png';
import BrushStroke from '../assets/brush-stroke.png';

const FilmProduction = () => {
  return (
    <div className="film-production-container">
      {/* Background Texture */}
      <div className="film-background">
        <img src={BackgroundTexture} alt="" className="film-texture" />
      </div>

      {/* Decorative Camera Icons */}
      <div className="camera-icon camera-top-left">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="25" stroke="#0F3255" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="40" r="15" stroke="#0F3255" strokeWidth="2" fill="none"/>
          <rect x="60" y="35" width="15" height="10" stroke="#0F3255" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="camera-icon camera-top-right">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <rect x="10" y="20" width="40" height="30" stroke="#0F3255" strokeWidth="2" fill="none" rx="3"/>
          <circle cx="30" cy="35" r="10" stroke="#0F3255" strokeWidth="2" fill="none"/>
          <rect x="52" y="30" width="8" height="10" stroke="#0F3255" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="camera-icon camera-middle-right">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none">
          <rect x="15" y="25" width="35" height="25" stroke="#0F3255" strokeWidth="2" fill="none" rx="2"/>
          <circle cx="32" cy="37" r="8" stroke="#0F3255" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="camera-icon camera-bottom-right">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <line x1="20" y1="50" x2="20" y2="20" stroke="#0F3255" strokeWidth="2"/>
          <line x1="20" y1="20" x2="35" y2="20" stroke="#0F3255" strokeWidth="2"/>
          <line x1="20" y1="50" x2="35" y2="50" stroke="#0F3255" strokeWidth="2"/>
          <circle cx="40" cy="35" r="15" stroke="#0F3255" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="camera-icon camera-bottom-left">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <rect x="20" y="30" width="35" height="30" stroke="#0F3255" strokeWidth="2" fill="none" rx="3"/>
          <circle cx="37" cy="45" r="10" stroke="#0F3255" strokeWidth="2" fill="none"/>
          <rect x="15" y="35" width="8" height="6" stroke="#0F3255" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Back Button */}
      <div className="back-button">
        <button className="back-btn">
          <span className="back-arrow">←</span> Back
        </button>
      </div>

      {/* Quote with Brush Stroke */}
      <div className="film-quote-container">
        <div className="brush-stroke-wrapper">
          <img src={BrushStroke} alt="" className="brush-stroke" />
        </div>
        <p className="film-quote">
          "Filmmaking is a chance to live many lifetimes." – Robert Altman
        </p>
      </div>

      {/* Film Image Card */}
      <div className="film-image-card">
        <img src={FilmImage} alt="Film Production" className="film-image" />
        <div className="film-card-label">
          <p>Film Production</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="film-content">
        <h2 className="film-content-title">Who says films are just an escape?</h2>
        <p className="film-content-text">
          We see them as a way to live many lives - to feel, to explore, and to tell stories that stay.
          And with each film, we carry new memories and new reasons to keep creating.
        </p>
        
        <div className="film-services">
          <h3 className="services-title">V crafts:</h3>
          <ul className="services-list">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>
        </div>

        <div className="explore-cta">
          <p className="explore-text">Explore Now</p>
          <div className="arrow-wrapper">
            <svg width="50" height="20" viewBox="0 0 50 20" fill="none">
              <path d="M0 10H45M45 10L35 2M45 10L35 18" stroke="#F15D2B" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmProduction;
