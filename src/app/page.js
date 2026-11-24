import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Layers, Pencil, Zap } from "lucide-react";

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
      <section className="min-h-screen  sm:min-h-[50vh]  bg-gray-600/10 flex justify-center items-center w-full h-inherit px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 ">
          <span className="flex flex-col items-center gap-2 ">
            {/* <Pencil size={50} /> */}
            <Icons.BlogCustomIcon className="w-12 h-12 text-white" />
            <h3 className="text-xl font-bold text-gray-100 ">
              Intuitive Editor
            </h3>
            <p className="text-gray-400 text-center ">
              {" "}
              Create and edit content with user friendly interface
            </p>
          </span>
          <span className="flex flex-col items-center gap-2 ">
            <Layers size={50} />
            <h3 className="text-xl font-bold text-gray-100 ">Flexible Tools</h3>
            <p className="text-gray-400 text-center ">
              {" "}
              Create and edit content with user friendly interface
            </p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Zap size={50} />
            <h3 className="text-xl font-bold text-gray-100 ">Blazing Fast</h3>
            <p className="text-gray-400 text-center ">
              {" "}
              Create and edit content with user friendly interface
            </p>
          </span>
        </div>
      </section>
      <section className="h-[60vh] sm:h-[50vh] w-full flex justify-center flex-col items-start ">
        <div className="max-w[50%] mx-auto space-y-3">
          <h4 className="font-bold text-2xl">
            {" "}
            Ready to Transform your Content Journey ?{" "}
          </h4>
          <p className="text-sm text-gray-400">
            {" "}
            Join thousands of content creators like you who chose Next-CMS{" "}
          </p>
          <div className="flex gap-2">
            <input
              className="bg-zinc-800 focus:outline-none rounded px-2 text-sm text-gray-300 py-[7px]"
              type="text"
              placeholder="Enter your email"
            />
            <Button variant="outline"> Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
