import Link from "next/link";
import { companyInfo } from "../companyInfo";

export default function MainNavigation() {
    return (
        <nav>
            <ul className="md:flex md:gap-4">
                {companyInfo.headerNavigationItems.map(i => (
                    <li key={i.path}><Link href={i.path}>{i.name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}
