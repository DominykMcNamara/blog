import SignupForm from "../components/SignupForm";

export default function page() {
  return (
    <section id="#signup" className="p-5 min-h-[100vh] flex flex-col justify-center">
      <div>
        <h1 className='text-3xl text-center'>Signup</h1>
      </div>
      <SignupForm />
    </section>
  );
}
