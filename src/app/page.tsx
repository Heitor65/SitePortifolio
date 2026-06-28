import Left from "@/components/Left";
import Right from "@/components/Right"

export default function Home() {
  return (
    <>
      <main className="h-screen overflow-hidden bg-zinc-950 px-4 py-4 sm:px-6 lg:px-2">
        <div className="mx-auto flex h-full max-w-7xl flex-col gap-4 lg:flex-row lg:items-stretch">
          <section className="flex flex-1 items-center justify-center p-8 sm:p-10 lg:h-full lg:flex-none lg:w-1/3 lg:sticky lg:top-4 lg:self-start">
            <Left />
          </section>
          <section className="flex flex-1 flex-col justify-start overflow-y-auto scroll-smooth p-8 sm:p-10 lg:h-full lg:w-2/3">
            <Right />
          </section>
        </div>
      </main>
    </>
  );
}