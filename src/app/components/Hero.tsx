import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-row justify-around mx-auto p-10 ">
        <div className="py-10 mx-auto">
          <h1 data-cy="hero-title" className="text-5xl font-bold">
            Welcome to NXTBLOG
          </h1>
          <p className="text-xl mt-3">
            <Link
              href="/"
              className="no-underline hover:underline hover:opacity-90"
              data-cy="signup-link"
            >
              <span> Signup </span>
            </Link>{" "}
            to begin blogging and sharing your posts with the world!
          </p>
          <div className="flex flex-row mx-auto">
            <Link
              className="bg-violet-500 rounded-sm text-slate-100 p-3 hover:opacity-90 hover:underline my-10 drop-shadow-xl"
              data-cy="login-button"
              href="/"
            >
              Login or Signup
            </Link>
            <Link
              className="bg-purple-500 mx-2 rounded-sm text-slate-100 p-3 hover:opacity-90 hover:underline my-10 drop-shadow-xl"
              data-cy="learn-more-button"
              href="/"
            >
              Learn More
            </Link>
          </div>
          <Image
            src="/images/learn-more.svg"
            alt="An illustration of a bookshelf with books and plants on it. There is also a woman standing to the right of the book shelf"
            height={500}
            width={600}
            className="my-4"
            data-cy="bookshelf-img"
          />
        </div>

        <Image
          src="/images/writer.svg"
          alt="An illustration of a person and a typewriter"
          height={500}
          width={600}
          className="mx-auto"
          data-cy="typewriter-image"
        />
      </div>
    </section>
  );
}
