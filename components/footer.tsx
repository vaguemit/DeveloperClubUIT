import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="bg-black py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Developer Club UIT
            </Link>
            <p className="mt-2 text-gray-400">Empowering the next generation of innovators</p>
          </div>
          <div className="flex space-x-6 items-center">
            <Link
              href={siteConfig.links.linkedin}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href={siteConfig.links.discord}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discord-white-icon-J2x2ILqMsMni1AE6Tol39XrVfnzuaK.png"
                alt="Discord"
                width={24}
                height={24}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <Link
              href="https://www.linkedin.com/in/mit-parikh-6aaba0333/"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mit Parikh
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

