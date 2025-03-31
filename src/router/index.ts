import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      children: [
        {
          path: "/hospital/registration",
          component: () =>
            import("@/components/Hospital_Info/registration.vue"),
        },
        {
          path: "/hospital/appointment_notice",
          component: () =>
            import("@/components/Hospital_Info/appointment_notice.vue"),
        },
        {
          path: "/hospital/hospital_details",
          component: () =>
            import("@/components/Hospital_Info/hospital_details.vue"),
        },
        {
          path: "/hospital/query_cancel",
          component: () =>
            import("@/components/Hospital_Info/query_cancel.vue"),
        },
        {
          path: "/hospital/stop_diagnosis_information",
          component: () =>
            import("@/components/Hospital_Info/stop_diagnosis_information.vue"),
        },
      ],
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
