import Image from "next/image";
import { companyInfo } from "../companyInfo";
import Link from "next/link";

type LogoProps = {
    linkToHome?: boolean,
    alternate?: boolean
}

export default function Logo({ linkToHome, alternate }: LogoProps) {
    const logo = <h1><Image
        src={!alternate ? companyInfo.logo : companyInfo.alternateLogo}
        alt={`${companyInfo.name} logo`}
        width={112}
        height={32}
    /></h1>

    return linkToHome ? <Link href='/'>{logo}</Link> : logo
}
