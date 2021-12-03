// import node from "../../asset/node.svg";
// import TS from "../../asset/typescroipt.svg";
// const skill: { logo: {}; name: string }[] = [
//   {
//     logo: node,
//     name: "nodejs",
//   },
//   {
//     logo: TS,
//     name: "TypeScript",
//   },
// ];
const array = [
  {
    satu: "satu",
  },
  {
    satu: "due",
  },
  {
    satu: "tiga",
  },
];

export default function Skill() {
  return (
    <div className="h-screen">
      <h1>HALO</h1>
      <div className="container px-4 mx-auto ">
        <div className="flex flex-wrap mx-auto justify-">
          <div className="w-24 h-24 bg-red-300 m-3"></div>
          <div className="w-24 h-24 bg-red-300 m-3"></div>
          <div className="w-24 h-24 bg-red-300 m-3"></div>
          <div className="w-24 h-24 bg-red-300 m-3"></div>
          <div className="w-24 h-24 bg-red-300 m-3"></div>
          <div className="w-24 h-24 bg-red-300 m-3"></div>
          <div className="w-24 h-24 bg-red-300 m-3"></div>
        </div>
      </div>
    </div>
  );
}
