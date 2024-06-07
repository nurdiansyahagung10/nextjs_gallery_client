/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:'i.pinimg.com',
        },
        {
            hostname:'cdn.dribbble.com',
        },
        {
            hostname:'localhost',
        }
    ]
    }
};

export default nextConfig;
