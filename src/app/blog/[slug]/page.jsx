import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SingleBlog() {
  const tempTags = "SpaceX, Nasa, Exploration ";
  const tempHtml = `<p> Demo Content</p>`;
  return (
    <section>
      <div className="flex items-center flex-col gap-4">
        <Image
          className="rounded border w-[90%] md:w-[700px]"
          src="/thumbnails/dreams.png"
          width={500}
          height={250}
          alt="page title"
        />

        <div className="meta-of-a-blog space-y-2">
          <div className="flex gap-2 items-center">
            <Calendar className="text-gray-400 size-4" />
            <p className="text-gray-400 text-xs">
              {" "}
              Created on:
              {dateFormat(new Date())}
            </p>
          </div>
          <div className="text-xs flex items-center gap-2">
            <p> Category:</p>
            <p className="badge border bg-gray-600/50 border-gray-700 w-fit px-2 py-1 rounded">
              {" "}
              Space Exploration
            </p>
          </div>
          <div className="text-xs flex items-center gap-2">
            <p> Tags:</p>
            {tempTags.split(",").map((tag) => (
              <p className="badge  border bg-gray-600/50 border-gray-700 w-fit px-[4px] py-[2px] rounded">
                {tag}
              </p>
            ))}
          </div>
          {/* <div
            className="content"
            dangerouslySetInnerHTML={{ __html: tempHtml }}
          ></div> */}
        </div>
        <p className="text-sm  w-[90%] md:w-2/3 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          exercitationem architecto eveniet. Voluptatum reprehenderit rem cumque
          doloremque, molestias voluptas molestiae asperiores? Tempore eius est
          sunt iure quam, modi, repellat quod veniam voluptatem sint blanditiis
          exercitationem eos incidunt maiores. <br /> Repudiandae, accusamus
          debitis voluptatum ea iure, voluptatibus iste commodi porro iusto
          suscipit impedit quaerat repellat aspernatur, <br />
          perferendis maiores asperiores dignissimos? Voluptatibus amet nihil
          aliquid. Officia, consequuntur. Animi nisi aut neque aliquam, delectus
          officia ipsa aspernatur, illum magni laudantium provident, dolorem ad
          nam voluptate! Sint maiores aliquam facere illo rerum dicta magni! Est
          aperiam dolor aliquam quo enim temporibus laborum suscipit, tempora
          dolorem, eveniet nihil possimus aliquid reiciendis eligendi maxime
          obcaecati, veritatis voluptatibus sunt quasi repudiandae molestias
          odit iusto modi. Alias, facilis repellat. Ab, inventore! Doloremque
          officiis maiores, eos voluptatem modi quos numquam sint quae vitae
          impedit recusandae cupiditate ab eius deserunt quaerat natus at rem,
          laborum pariatur sed quasi illum nulla corrupti laboriosam.
          Consequuntur ratione nemo fugiat aut vel delectus, exercitationem eum
          at deleniti odio quia, facilis sequi sint dolorem distinctio
          architecto autem maiores sit magni minima placeat! Omnis sed
          consequatur reprehenderit id. Eos praesentium ratione asperiores sunt
          rerum incidunt sed consequatur laborum qui, amet porro accusamus harum
          iusto numquam nulla ea.
        </p>
      </div>
    </section>
  );
}
