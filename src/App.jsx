import Introduction from "./components/Introduction";
import ViteLog from "./components/ViteLogo";
import Options from "./components/Options";
import DescriptionCards from "./components/DescriptionCards";

export default function App() {
  return (
    <main id="main-layout">
      <Introduction />
      <ViteLog />
      <Options />
      <DescriptionCards />
    </main>
  );
}
