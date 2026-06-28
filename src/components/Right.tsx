import About from "@/components/About"
import Portifolio from "@/components/Portifolio"
import Experiences from "@/components/Experieces"

export default function Right() {
    return (
        <section className="flex min-h-full flex-col">
            <div id="sobre" className="min-h-[calc(100vh-8rem)] scroll-mt-6">
                <About />
            </div>
            <div id="projetos" className="flex flex-col gap-4 pb-8 scroll-mt-6">
                <Portifolio />
            </div>
            <div id="experiencias" className="flex flex-col gap-4 pb-8 scroll-mt-6">
                <Experiences />
            </div>
        </section >
    );
}