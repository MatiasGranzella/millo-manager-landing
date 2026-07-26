import type { NextConfig } from "next";

import { PHOTOS_BASE_URL } from "./lib/game/photos";

// Los retratos de los ídolos se sirven desde el bucket público del juego, así
// que next/image necesita tener ese host permitido. Se deriva de la misma
// constante que arma las URLs para que no se puedan desincronizar.
const photosHost = new URL(PHOTOS_BASE_URL).hostname;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: photosHost,
        pathname: "/storage/v1/object/public/photos/**",
      },
    ],
  },
};

export default nextConfig;
