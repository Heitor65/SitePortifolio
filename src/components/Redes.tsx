export default function Redes() {
    return (
        <section className="flex gap-4">
            <a href="https://github.com/Heitor65" target="_blank" rel="noopener noreferrer" className="float-icon rounded-full border border-zinc-800 bg-zinc-950/60 p-3 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/10">
                <img src="/images/icons/github-brands-solid-full.svg" alt="GitHub" className="h-auto w-[50px]" />
            </a>
            <a href="https://www.linkedin.com/in/heitor-g-lima" target="_blank" rel="noopener noreferrer" className="float-icon-delay rounded-full border border-zinc-800 bg-zinc-950/60 p-3 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/10">
                <img src="/images/icons/linkedin-brands-solid-full.svg" alt="LinkedIn" className="h-auto w-[50px]" />
            </a>
        </section>
    );
}