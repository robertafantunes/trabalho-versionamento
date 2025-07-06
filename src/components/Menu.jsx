import Link from "next/link";

export function Menu() {
  return (
    <nav className="w-full border-b p-4">
      <ul className="flex gap-6 justify-center text-sm font-medium">
        <li><Link href="/clientes" className="hover:underline">Clientes</Link></li>
        <li><Link href="/contato" className="hover:underline">Contato</Link></li>
        <li><Link href="/eventos" className="hover:underline">Eventos</Link></li>
        <li><Link href="/produtos" className="hover:underline">Produtos</Link></li>
        <li><Link href="/sobre-nos" className="hover:underline">Sobre Nós</Link></li>
      </ul>
    </nav>
  );
}
