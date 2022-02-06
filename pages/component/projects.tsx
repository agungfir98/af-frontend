import project from "../../data/project.json";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Projects() {
  const data = project.Project;
  return (
    <div className="relative" id="projects">
      <div className="sm:pt-20 pt-16 container lg:px-32 md:px-16 px-4 mx-auto md:text-left">
        <h1 className="text-gray-800 dark:text-white-wdew text-2xl sm:text-4xl font-bold">
          Projects
        </h1>
        <div className="py-4">
          {data.map((res) => {
            return (
              <div key={res.title} className="py-2">
                <h1 className="text-1xl font-semibold">
                  <li>{res.title}</li>
                </h1>
                <a
                  href={res.url}
                  target="_blank"
                  className="w-32 flex px-8 text-md pt-1 text-red-500"
                  rel="noreferrer"
                >
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
