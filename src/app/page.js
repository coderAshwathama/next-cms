import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <main className="w-full">
      <section className="flex justify-center w-full h-[50vh] sm:h-[70vh]">
        <div className="flex flex-col justify-center items-center  gap-4 text-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Manage your Content With Ease
            </h1>
            <p className="text-gray-400 max-w-[700px] mx-auto">
              Streamline your content workflow, publish with confidence
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant={"default"} className="bg-gray-200">
              Try it out !{" "}
            </Button>
            <Button variant={"outline"}>Try it out ! </Button>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
