import './NotFound.css'
import scarecrow from "../../images/scarecrow.png";

function NotFound() {
  return (
    <>
      <section className="image-container">
        <img src={scarecrow} alt="Scarecrow" aria-label="Page Not Found Image" />
      </section>
      <section className="message-container">
        <h2 className="not-found-subtitle">
          I have bad news for you
        </h2>
        <p className="not-found-message">
          The page you are looking for might be removed or is temporarily unavailable
        </p>
        <a className="back-to-home__button" href="#">BACK TO HOMEPAGE</a>
      </section>
    </>
  )
}

export default NotFound