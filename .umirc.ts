import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/one", component: "one" },
    { path: "/two", component: "two" },
    { path: "/", redirect: 'one' }
  ],
  npmClient: 'pnpm',
});
