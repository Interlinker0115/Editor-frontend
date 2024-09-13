/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com', // Replace with your image domain
                port: '', // Leave empty for default
                pathname: '/path/to/images/**', // Adjust the path as necessary
            },
        ],
    },

};

export default nextConfig;
