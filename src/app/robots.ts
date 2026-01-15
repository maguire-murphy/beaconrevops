import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://beacon.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/dashboard/*",
                    "/dashboard",
                    "/onboarding/*",
                    "/onboarding",
                    "/api/*",
                    "/customers/*",
                    "/metrics/*",
                    "/forecast/*",
                    "/pipeline/*",
                    "/settings/*",
                ],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
