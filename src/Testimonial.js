import profile from "./assets/images/image-founder.webp";
import pattern3 from "./assets/images/bg-pattern-3.svg";
function Testimonial() {
  return (
    <section className="testimonial">
      <div className="profile-container">
        <img src={profile} alt="profile" />
      </div>
      <div className="review-box">
        <h3>Be the first to test</h3>
        <p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <button className="review-btn">Apply for access</button>
        <img src={pattern3} alt="pattern" className="pattern3" />
      </div>
    </section>
  );
}

export default Testimonial;
