import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

export const appRouter = trpc.router().query("get-notes", {
  resolve() {
    return ["Configure tRPC", "Configure Tailwind", "Configure Daisy UI"];
  },
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
