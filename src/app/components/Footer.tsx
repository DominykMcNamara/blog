import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-violet-500 p-4  mt-10 ">
      <div className="prose prose-xl   flex justify-between flex-row mx-auto">
        <h1 className="text-3xl grid place-content-center">
          <Link
            data-cy="footer-title"
            className="no-underline text-slate-200"
            href="/"
          >
            &#127760;NXTBLOG
          </Link>
        </h1>
        <div className="flex flex-row justify-center gap-4">
          <Link
            className="no-underline text-slate-200 hover:underline  hover:opacity-90"
            href="/"
            data-cy='footer-link'
          >
           Support
          </Link>
        </div>
      </div>
      <p data-cy="footer-copy" className="text-slate-300 text-center hover:opacity-90">&copy; 2023 Dominyk McNamara</p>
    </footer>
  );
}
