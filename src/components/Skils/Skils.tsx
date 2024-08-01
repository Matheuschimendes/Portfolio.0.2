import Image from "next/image";

import javascript from "@/assets/skils/javascript.svg";
import node from "@/assets/skils/node.svg";
import react from "@/assets/skils/react.svg";
import next from "@/assets/skils/next-js.svg";

export default function Skils() {
  return (
    <ul className="ml-1 mt-16 flex items-center">
      <li className="mr-5 shrink-0 ">
        <a className="block hover:text-slate-800" href="">
          <Image src={javascript} alt={""} width={30} />
        </a>
      </li>
      <li className="mr-5 shrink-0">
        <a className=" hover:text-slate-900" href="">
          <Image src={node} alt={""} width={30} />
        </a>
      </li>
      <li className="mr-5 shrink-0">
        <a href="">

        <Image src={react} alt={""} width={30} />
        </a>
      </li>
      <li className="mr-5 shrink-0 bg-black hover:bg-slate-800">
        <a href="">
        <Image src={next} alt={""} width={30} />
        </a>
      </li>
    </ul>
  );
}
