export default function Title() {
    return (
        <section className="flex flex-col items-start gap-3 border-l border-cyan-500/40 pl-5 pt-2">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
                Portfólio
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
                Heitor Lima
            </h1>
            <h2 className="text-2xl text-zinc-300 sm:text-3xl">Desenvolvedor</h2>
            <p className="ml-1 mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                Estudante de Engenharia da Computação
            </p>
        </section>
    );
}