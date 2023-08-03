function Feature({ number, title, description }) {
  return (
    <div className="feature">
      <div className="number-circle">
        <p className="number">{number}</p>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
