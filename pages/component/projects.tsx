import project from "../../data/project.json";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Projects() {
  const data = project.Project;
  return (
    <div id="Project">
      <div className="sm:pt-20 pt-16 container lg:px-32 md:px-16 px-4 mx-auto sm:mt-20 md:text-left">
        <h1 className=" text-2xl sm:text-5xl font-bold">Projects</h1>
        <div className="py-4">
          {data.map((res) => {
            return (
              <div key={res.title} className="py-2">
                <h1 className="font-semibold">
                  <li>{res.title}</li>
                </h1>
                <a href={res.url} className="flex px-6 text-white-blue2">
                  {res.platform}
                  <ExternalLinkIcon className="h-3 w-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
