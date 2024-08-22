import { companyInfo } from "./companyInfo";

export default function Home() {
  return (
    <main className="mx-4 pb-4">
      <h1>Hello {companyInfo.name}</h1>      
    </main>
  );
}
