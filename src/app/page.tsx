import Left from "@/components/Left";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col md:flex-row">
        <section className="flex flex-1 items-center justify-center p-8">
          <Left />
        </section>
        <section className="flex flex-1 items-center justify-center p-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae cumque reprehenderit nesciunt reiciendis adipisci! Expedita, fuga vel quasi obcaecati architecto voluptatem voluptas eveniet facere atque ipsum necessitatibus provident, maxime iste!</p>
        </section>
      </main>
    </>
  );
}