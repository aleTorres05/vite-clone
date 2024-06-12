export default function DescriptionCards() {
  const cards = [
    {
      icon: "💡",
      title: "Instant Server Start",
      text: "On demand file serving over native ESM, no bundling required!",
    },
    {
      icon: "⚡️",
      title: "Lightning Fast HMR",
      text: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
    },
    {
      icon: "🛠️",
      title: "Rich Features",
      text: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
    },
    {
      icon: "📦",
      title: "Optimized Build",
      text: "Pre-configured Rollup build with multi-page and library mode support.",
    },
    {
      icon: "🔩",
      title: "Universal Plugins",
      text: "Rollup-superset plugin interface shared between dev and build.",
    },

    {
      icon: "🔑",
      title: "Fully Typed APIs",
      text: "Flexible programmatic APIs with full TypeScript typing.",
    },
  ];
  return (
    <section className="card-section">
      {cards.map((card) => {
        return (
          <article key={`card-${card.title}`} className="cards">
            <span className="card-icon">{card.icon}</span>
            <h4 className="card-title">{card.title}</h4>
            <p className="card-text">{card.text}</p>
          </article>
        );
      })}
    </section>
  );
}
