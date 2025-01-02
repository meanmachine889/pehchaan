import Hero from "./components/hero";
import Shop from "./components/shop";
import Youtube from "./components/youtube";

export default function Home() {
  return (
    <div className="flex flex-col gap-[15vw] md:gap-[3vw] w-screen min-h-screen items-center justify-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Hero />
      <Shop/>
      <Youtube />
    </div>
  );
}
