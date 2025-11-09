import './AboutTeam.css';

const AboutTeam = () => {
  return (
    <section className="about-team" id="our-story">
      <div className="about-team-container">
        {/* Left Side - Building Icon and Sticky Note */}
        <div className="about-team-left">
          <div className="building-icon">
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="40" height="60" fill="#E8B4A0" opacity="0.3"/>
              <rect x="28" y="35" width="10" height="12" fill="#D84315" opacity="0.4"/>
              <rect x="42" y="35" width="10" height="12" fill="#D84315" opacity="0.4"/>
              <rect x="28" y="52" width="10" height="12" fill="#D84315" opacity="0.4"/>
              <rect x="42" y="52" width="10" height="12" fill="#D84315" opacity="0.4"/>
              <path d="M 35 72 Q 40 65 45 72 L 45 80 L 35 80 Z" fill="#D84315"/>
            </svg>
          </div>
          
          <div className="sticky-note">
            <p className="sticky-note-text">
              Some craft films. Some build brands.<br/>
              Some curate art. We bring it all together - a<br/>
              collective of storytellers driven by one<br/>
              belief: every project deserves to be more<br/>
              than just a message; it should become a<br/>
              masterpiece.<br/><br/>
              From first spark to final frame, from raw<br/>
              ideas to timeless visuals - we shape stories<br/>
              that stay with you.
            </p>
          </div>

          <div className="branding-badge">
            <div className="badge-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" fill="#E91E63"/>
              </svg>
            </div>
            <span className="badge-number">2</span>
            <span className="badge-label">Branding Experts</span>
          </div>
        </div>

        {/* Right Side - Team Silhouettes */}
        <div className="about-team-right">
          <div className="team-silhouettes">
            {/* Person 1 */}
            <div className="person">
              <div className="head"></div>
              <div className="body"></div>
            </div>
            {/* Person 2 */}
            <div className="person">
              <div className="head"></div>
              <div className="body"></div>
            </div>
            {/* Person 3 */}
            <div className="person person-center">
              <div className="head"></div>
              <div className="body"></div>
              <div className="team-badge-center">
                <div className="badge-dot cyan"></div>
                <div className="badge-dot yellow"></div>
                <span className="badge-num">3</span>
              </div>
            </div>
            {/* Person 4 */}
            <div className="person">
              <div className="head"></div>
              <div className="body"></div>
            </div>
            {/* Person 5 */}
            <div className="person">
              <div className="head"></div>
              <div className="body"></div>
              <span className="makers-label">Makers</span>
            </div>
          </div>

          <div className="team-cta">
            <p className="team-cta-text">
              Take a closer look at the stories V bring to life.
            </p>
            <button className="view-portfolio-btn">View Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
