import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 p-4 bg-orange-600 drop-shadow-xl  z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-row">
        <h1 className="text-3xl grid place-content-center ">
          <Link className="no-underline text-slate-200" href="/">&#127760;NXTBLOG</Link>
        </h1>
        <div className="flex flex-row justify-center gap-4">
          <Link className="no-underline text-slate-200 hover:underline  hover:opacity-90" href="/">Home</Link>
          <Link className="no-underline text-slate-200 hover:underline hover:opacity-95" href="/">Account/Signup</Link>
        </div>
      </div>
    </nav>
  );
}
