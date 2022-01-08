interface Props {
  name: string;
}
export default function Footer(props: Props) {
  const nama: string = props.name;
  const year = new Date().getFullYear();
  return (
    <footer
      className="h-20 w-full drop-shadow-md flex justify-center items-center text-center text-sm"
      id="foot"
    >
      <p>
        © {year} made with 💗 by {nama}
        <br />✌ This Portofolio web is still WIP (WORK IN PROGRESS) ✌
      </p>
    </footer>
  );
}
