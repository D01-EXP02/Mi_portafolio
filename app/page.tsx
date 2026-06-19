import CoverParticle from "@/component/coverParticle";
import Introduction from "@/component/introduction";
import TransitionPage from "@/component/transitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className=" flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticle />
        <Introduction />
      </div>
    </main>
  );
}
