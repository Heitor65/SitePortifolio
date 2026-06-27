import Left from "@/components/Left";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col md:flex-row">
        <section className="flex flex-1 items-center justify-center p-8">
          <Left />
        </section>
        <section className="flex flex-1 items-center justify-center p-8">
          <p>is illo sequi a. Magni alias hic optio accusamus, cum pariatur atque molestias.</p>
        </section>
      </main>
    </>
  );
}