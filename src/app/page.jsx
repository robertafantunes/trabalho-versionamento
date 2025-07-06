import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <main className="flex flex-col items-center justify-center text-center flex-1 px-4 py-8 gap-4">
        <p className="text-base text-neutral-700 uppercase tracking-wider">
          Bem-vindo ao
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 ">
          Trabalho de Versionamento
        </h1>
        <p className="text-base text-neutral-700">da Roberta</p>
      </main>
    </div>
  );
}
