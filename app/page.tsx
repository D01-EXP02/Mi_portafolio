import CoverParticle from "@/component/coverParticle";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-cover">
      <CoverParticle />
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-10">
        <h1 className="text-white text-5xl font-bold">Hola, soy David</h1>
        <p className="text-yellow-400 text-xl mt-4">Mi intro</p>
      </div>
    </main>
  );
}
