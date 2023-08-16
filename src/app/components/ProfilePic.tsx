import Image from "next/image";

type Props = {
  img: string | undefined,
};

export default function ProfilePic({img}: Props): JSX.Element {
  return (
    <section className="mx-auto">
      <Image
        className="drop-shadow-xl shadow-black rounded-md"
        src={img || ''}
        width={200}
        height={200}
        alt="Users profile picture"
        priority={true}
      />
    </section>
  );
}
