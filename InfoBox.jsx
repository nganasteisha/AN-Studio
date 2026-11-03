
function InfoBox({ title, children }) {
  return (
    <section className="info-box">
      <h3>{title}</h3>
      <div className="info-box-content">
        {children}
      </div>
    </section>
  );
}

export default InfoBox;
