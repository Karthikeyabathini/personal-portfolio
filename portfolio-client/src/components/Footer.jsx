import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{profile.name}</strong>
        <p>Building useful software with care, speed, and polish.</p>
      </div>
      <div className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
        <a href={`tel:${profile.phone}`} aria-label="Phone"><FaPhone /></a>
      </div>
      <span>Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
    </footer>
  );
}

export default Footer;
