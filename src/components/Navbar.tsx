export default function Left() {
    return (
        <nav className="flex flex-col gap-4 mt-20 justify-items-end">
            <span className="w-fit self-start hover:opacity-60 transition-opacity"><a href="#sobre">Sobre</a></span>
            <span className="w-fit self-start hover:opacity-60 transition-opacity"><a href="#experiencias">Experiencias</a></span>
            <span className="w-fit self-start hover:opacity-60 transition-opacity"><a href="#projetos">Projetos</a></span>
            <button className="mt-20 px-3 py-3 bg-[#4ccceb] text-white rounded-2xl hover:bg-[#4ccceb]/80 transition-colors">
                Currículo
            </button>
        </nav>
    );
}