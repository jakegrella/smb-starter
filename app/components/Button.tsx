import Link from "next/link"

type ButtonProps = {
    children: React.ReactNode,
    internalLink?: { href: string },
    externalLink?: { href: string }
}

export default function Button({ children, internalLink, externalLink }: ButtonProps) {
    if (internalLink) return <Link href={internalLink.href} className="bg-primary text-light rounded-xl px-4 py-2">{children}</Link>
    else if (externalLink) return <a href={externalLink.href} className="bg-primary text-light rounded-xl px-4 py-2">{children}</a>
    else return <button className="bg-primary text-light rounded-xl px-4 py-2" onClick={() => {}}>{children}</button>
}
