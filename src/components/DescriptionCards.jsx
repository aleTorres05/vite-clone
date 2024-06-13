export default function DescriptionCards({ icon, title, text }) {
  return (
    <section>
      <article>
        <span className="card-icon">{icon}</span>
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
      </article>
    </section>
  );
}
