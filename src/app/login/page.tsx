
import LoginForm from "../components/LoginForm";

export default function page() {
  return (
    <section id="#login" className="p-5 min-h-[100vh] flex flex-col justify-center">
      <div>
        <h1 className='text-3xl text-center'>Login</h1>
      </div>
      <LoginForm />
    </section>
  );
}
