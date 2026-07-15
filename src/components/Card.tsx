import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    tech?: string[];
    repo: string;
    image: string;
    mostrar?: boolean;
    desenvolvimento?: boolean;
}

export default function Card({ title,
    description,
    tech = [],
    repo,
    image,
    mostrar,
    desenvolvimento,
}: ProjectCardProps) {
    return (
        <div className="border-b border-zinc-700 bg-zinc-800">
            <div className="relative h-44 overflow-hidden border-b border-zinc-700 bg-zinc-800">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>



            <div className="p-5">
                <div className="mb-3 flex items-center gap-3">
                    <h3 className="flex-1 text-lg font-semibold text-zinc-100">
                        {title}
                    </h3>
                    {desenvolvimento && (
                        <p className="text-xs font-semibold text-amber-400">
                            Em Desenvolvimento
                        </p>
                    )}
                </div>

                <p className="mb-4 text-sm leading-6 text-zinc-400">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex gap-3 text-sm font-medium text-zinc-200">
                    {mostrar && (
                        <a href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-zinc-300"
                        >
                            Repo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}