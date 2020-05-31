import Link from "next/link"

const Logo = () => {
  return (
    <div className="fixed md:fixed--center left-0 ml-8 sm:ml-12 lg:ml-16 z-10 md:z-0 mt-6 md:mt-0">
      <Link href="/">
        <img className="cursor-pointer" src="/logo.png" alt="Logo" />
      </Link>
    </div>
  )
}

export default Logo