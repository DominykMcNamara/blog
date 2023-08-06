import Link from "next/link"
export default function page() {
  return (
    <div>
        <h1>Thank you for creating an account! You can login <Link href="/login">here</Link></h1>
    </div>
  )
}
