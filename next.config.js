/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/post",
                permanent: true,
            },
        ];
    },
    images: {
        domains: ["pcpoarzixkpbnromuhrh.supabase.co"],
    },
    async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "private, no-cache, no-store, max-age=0, must-revalidate",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
