import logo from "../../public/Images/tab.png";

function Loader() {
  return (
    <div className="portfolio-loader" role="status" aria-live="polite">
      <div className="portfolio-loader-glow" />
      <div className="portfolio-loader-mark">
        <span className="portfolio-loader-ring portfolio-loader-ring-one" />
        <span className="portfolio-loader-ring portfolio-loader-ring-two" />
        <img src={logo} alt="" />
      </div>
      <div className="portfolio-loader-copy">
        <strong>DHIVAKAR <span>P</span></strong>
        <small>FULL STACK DEVELOPER</small>
        <p>Loading portfolio<span className="portfolio-loader-dots">...</span></p>
      </div>
    </div>
  );
}

export default Loader;
