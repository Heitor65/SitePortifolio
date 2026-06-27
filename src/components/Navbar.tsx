export default function Left() {
    return (
        <nav className="flex flex-col gap-4 mt-0 mt-20 justify-items-end">
            <span>Sobre</span>
            <span>Experiencias</span>
            <span>Projetos</span>
            <button className="mt-20 px-3 py-3 bg-[#4ccceb] text-white rounded-2xl hover:bg-[#4ccceb]/80 transition-colors">
                Currículo
            </button>
        </nav>
    );
}