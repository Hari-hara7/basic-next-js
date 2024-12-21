import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" passHref>
            <a className="text-xl font-bold">BlogSite</a>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a className="hover:underline">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  