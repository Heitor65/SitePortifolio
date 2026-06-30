import Title from "@/components/Title"
import NavBar from "@/components/Navbar"
import Redes from "@/components/Redes"


export default function Left() {
    return (
        <section className="flex h-full w-full max-w-lg flex-col justify-between gap-10 sm:px-4 lg:px-6">
            <Title />
            <NavBar />
            <Redes />
        </section>
    );
}