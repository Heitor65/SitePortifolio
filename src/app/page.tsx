import Left from "@/components/Left";

export default function Home() {
  return (
    <>
      <main className="flex h-screen overflow-hidden">
        <section className="w-1/2 flex items-center justify-center p-8 sticky top-0">
          <Left />
        </section>
        <section className="w-1/2 overflow-y-auto p-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae cumque reprehenderit nesciunt reiciendis adipisci! Expedita, fuga vel quasi obcaecati architecto voluptatem voluptas eveniet facere atque ipsum necessitatibus provident, maxime iste!</p>
        </section>
      </main>
    </>
  );
}