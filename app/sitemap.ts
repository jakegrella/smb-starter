import { MetadataRoute } from "next";
import { companyInfo } from "./companyInfo";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `https://${companyInfo.url}`,
            lastModified: new Date(),
            changeFrequency: 'yearly'
        }
    ]
}