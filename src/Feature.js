function Feature({ number, title, description }) {
  return (
    <div className="feature">
      <div className="number-circle">
        <p className="number">{number}</p>
      </div>
      <div className="feature-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
