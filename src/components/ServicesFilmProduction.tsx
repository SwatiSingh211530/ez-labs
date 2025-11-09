import './ServicesFilmProduction.css';
import BackgroundTexture from './BackgroundTexture.svg';

const ServicesFilmProduction = () => {
  return (
    <div className="services-film-container">
      {/* Background Texture */}
      <div className="services-film-background">
        <img src={BackgroundTexture} alt="" className="services-film-texture" />
      </div>

      {/* Content Area - Add your content here */}
      <div className="services-film-content">
        <h1 className="services-film-title">Film Production Services</h1>
        
        {/* Add your content sections here */}
        
      </div>
    </div>
  );
};

export default ServicesFilmProduction;
