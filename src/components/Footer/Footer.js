import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" title="footer">
      <div className="editors">
        <p>
          Designed by <a href="https://github.com/decolorblau"> Clàudia Font</a>
        </p>
      </div>
      <div className="beezy">
        <p> - BEEZY - REACT CODE CHALLENGE -</p>
      </div>
      <div className="cookies">
        <p>Privacy Policy</p>
        <p className="cookies__barra"> | </p>
        <p>Legal Notice</p>
      </div>
    </footer>
  );
};

export default Footer;
