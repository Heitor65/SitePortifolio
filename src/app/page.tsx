import Left from "@/components/Left";
import Right from "@/components/Right"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-zinc-950 px-4 py-4 sm:px-6 lg:px-2 lg:h-screen lg:overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:h-full lg:flex-row lg:items-stretch">
          <section className="flex items-center justify-center p-8 sm:p-10 lg:h-full lg:flex-none lg:w-1/3 lg:sticky lg:top-4 lg:self-start">
            <Left />
          </section>
          <section className="flex flex-col justify-start p-8 sm:p-10 lg:h-full lg:w-2/3 lg:overflow-y-auto lg:scroll-smooth">
            <Right />
          </section>
        </div>
      </main>
    </>
  );
}