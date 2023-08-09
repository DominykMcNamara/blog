import Image from "next/image";

type Props = {
  img: string | undefined;
};

export default function ProfilePic({img}: Props): JSX.Element {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-violet-300 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src={img || ''}
        width={200}
        height={200}
        alt="Dom McNamara"
        loading="lazy"
      />
    </section>
  );
}
