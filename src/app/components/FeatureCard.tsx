import Image from "next/image";
type Props = {
  img: string;
  description: string;
  alt: string;
};
export default function FeatureCard({ img, description, alt }: Props) {
  return (
    <div id='feature-card' className="flex flex-col p-5 bg-slate-300 rounded-md drop-shadow-2xl hover:drop-shadow-xl m-3">
      <Image src={img} alt={alt} height={300} width={300} className="mx-auto my-auto" />
      <p className="text-center my-auto py-10">{description}</p>
    </div>
  );
}
