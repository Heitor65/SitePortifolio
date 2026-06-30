export default function Left() {
    return (
        <nav className="flex flex-col gap-4 text-zinc-300">
            <span className="w-fit self-start transition-colors hover:text-cyan-300"><a href="#sobre">Sobre</a></span>
            <span className="w-fit self-start transition-colors hover:text-cyan-300"><a href="#projetos">Projetos</a></span>
            <span className="w-fit self-start transition-colors hover:text-cyan-300"><a href="#experiencias">Experiências</a></span>
            <a href="Currículo.pdf" download className="mt-6 w-fit rounded-2xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 font-medium text-emerald-300 transition-colors hover:border-emerald-400/50 hover:bg-emerald-500/20">
                Currículo
            </a>
        </nav>
    );
}