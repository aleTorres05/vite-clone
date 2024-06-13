import Introduction from "./components/Introduction";
import ViteLog from "./components/ViteLogo";
import Options from "./components/Options";
import DescriptionCards from "./components/DescriptionCards";

export default function App() {
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
    <main id="main-layout">
      <Introduction />
      <ViteLog />
      <Options />
      <section className="card-section">
        {cards.map((card) => {
          return (
            <DescriptionCards
              className="cards"
              key={`card-${card.title}`}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          );
        })}
      </section>
    </main>
  );
}
