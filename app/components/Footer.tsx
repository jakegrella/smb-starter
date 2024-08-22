import Link from "next/link";
import { companyInfo } from "../companyInfo";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="flex justify-between p-4 bg-dark text-light">
            <div className="flex flex-col justify-between ">
                <div>
                    <Logo linkToHome alternate />
                    <p>{companyInfo.description}</p>
                </div>

                <p>© {new Date().getFullYear()} {companyInfo.legalName}</p>
            </div>
            <div className="flex flex-col">
                <h4>Company</h4>
                <nav>
                    <ul>
                        {companyInfo.footerNavigationItems.map(i => (
                            <li key={i.path}>
                                <Link href={i.path} className="block py-2">{i.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
