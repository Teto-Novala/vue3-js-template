import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "home",
        component: HomeView,
      },
    ],
  },
];

export default routes;
