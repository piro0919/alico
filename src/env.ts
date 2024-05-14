import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  client: {
    NEXT_PUBLIC_IS_PWA: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_IS_PWA: process.env.NEXT_PUBLIC_IS_PWA,
  },
  server: {},
});

export default env;
