export default function Portifolio() {
    return (
        <div className="flex flex-row gap-6 flex-wrap justify-center">
            <div className="w-80 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">

                <div className="flex h-44 items-center justify-center border-b border-zinc-700 bg-zinc-800">
                    <img
                        src="#"
                        alt="Project Image"
                        className="h-full w-full object-cover"
                    />
                </div>



                <div className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                        <h3 className="flex-1 text-lg font-semibold text-zinc-100">
                            API gestão de estágios
                        </h3>
                    </div>

                    <p className="mb-4 text-sm leading-6 text-zinc-400">
                        API REST para gestão de estágios, com autenticação por token, controle de acesso por perfis (Aluno, Secretaria e Coordenador), cadastro de documentação e fluxo de aprovação e reprovação de documentos.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {["Python", "Django", "SQLite"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex gap-3 text-sm font-medium text-zinc-200">
                        <a href="https://github.com/Projetos-de-Extensao/PBE_26.1_8002_IV.git" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-300">
                            Repo
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-80 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">

                <div className="flex h-44 items-center justify-center border-b border-zinc-700 bg-zinc-800">
                    <img
                        src="/images/cards/portifolio.png"
                        alt="Project Image"
                        className="h-full w-full object-cover"
                    />
                </div>



                <div className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                        <h3 className="flex-1 text-lg font-semibold text-zinc-100">
                            Site Portifólio
                        </h3>
                    </div>

                    <p className="mb-4 text-sm leading-6 text-zinc-400">
                        Este site
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {["TypeScript", "React", "Next.js", "Tailwind CSS"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex gap-3 text-sm font-medium text-zinc-200">
                        <a href="https://github.com/Heitor65/SitePortifolio.git" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-300">
                            Repo
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-80 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">

                <div className="flex h-44 items-center justify-center border-b border-zinc-700 bg-zinc-800">
                    <img
                        src="#"
                        alt="Project Image"
                        className="h-full w-full object-cover"
                    />
                </div>



                <div className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                        <h3 className="flex-1 text-lg font-semibold text-zinc-100">
                            Brasildocs
                        </h3>
                        <span className="text-xs text-zinc-400 rounded-full bg-zinc-700 px-3 py-1">
                            Em desenvolvimento
                        </span>
                    </div>

                    <p className="mb-4 text-sm leading-6 text-zinc-400">
                        Biblioteca em Python para validação e geração de documentos brasileiros, como CPF, CNPJ e outros identificadores comuns no Brasil.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {["Python", "Pytest"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex gap-3 text-sm font-medium text-zinc-200">
                        <a href="https://github.com/Heitor65/brasildocs.git" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-300">
                            Repo
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-80 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">

                <div className="flex h-44 items-center justify-center border-b border-zinc-700 bg-zinc-800">
                    <img
                        src="/images/cards/br_holidays2.png"
                        alt="Project Image"
                        className="h-full w-full object-cover"
                    />
                </div>



                <div className="p-5">
                    <div className="mb-3 flex items-center gap-3">
                        <h3 className="flex-1 text-lg font-semibold text-zinc-100">
                            API de feriados brasileiros
                        </h3>
                    </div>

                    <p className="mb-4 text-sm leading-6 text-zinc-400">
                        API REST que retorna exclusivamente feriados com respaldo jurídico nacional e estadual para setor privado e público, diferenciando feriados fixos, móveis baseados na Páscoa e datas específicas por UF.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {["Python", "Flask", "Pydantic"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex gap-3 text-sm font-medium text-zinc-200">
                        <a href="https://github.com/Heitor65/br-holidays-api.git" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-300">
                            Repo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}