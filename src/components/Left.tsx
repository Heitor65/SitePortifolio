import Title from "@/components/Title"
import NavBar from "@/components/NavBar"
import Redes from "@/components/Redes"


export default function Left() {
    return (
        <section className="flex flex-col">
            <Title />
            <NavBar />
            <Redes />
        </section>
    );
}