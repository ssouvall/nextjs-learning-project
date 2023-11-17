import { lusitana } from "../fonts";

export default function LoggedInUser({ name }: { name: string | undefined }) {
  return (
    <div className="flow-root">
      <h1
        className={`${lusitana.className} mb-4 text-xl md:text-2xl float-left`}
      >{`Welcome ${name}!`}</h1>
      {/* <p className="float-right">Dropdown</p> */}
    </div>
  );
}
