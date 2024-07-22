import { createRouter, createWebHistory } from "vue-router";

async function getRoutes() {
  const routes = [];

  const modules = import.meta.glob("/**/modules/**/routes/*.js");
  console.log("modules : ", modules);

  for (const path in modules) {
    console.log("module", path);
    const module = await modules[path]();
    routes.push(...module.default);
  }

  console.log("Routes: ", routes);

  return routes;
}

const autoLoadRoute = async () => {
  const routes = await getRoutes();

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
      return { top: 0 };
    },
    routes: [
      {
        path: "/",
        name: "EntryPoint",
      },
      ...routes,
    ],
  });
  return router;
};

export default autoLoadRoute;
