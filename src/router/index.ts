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
        {
          path: "register_step1",
          component: () =>
            import("@/components/Hospital_Info/register_step1.vue"),
          meta: {
            title: "预约第一步",
          },
        },
        {
          path: "register_step2",
          component: () =>
            import("@/components/Hospital_Info/register_step2.vue"),
          meta: {
            title: "预约第二步",
          },
        },
      ],
    },
    {
      path: "/user",
      component: () => import("@/pages/user/index.vue"),
      children: [
        {
          path: "certification",
          component: () => import("@/pages/user/certification.vue"),
          meta: {
            title: "实名认证",
          },
        },
        {
          path: "order",
          component: () => import("@/pages/user/order.vue"),
          meta: {
            title: "挂号订单",
          },
        },
        {
          path: "patient",
          component: () => import("@/pages/user/patient.vue"),
          meta: {
            title: "就诊人管理",
          },
        },
        {
          path: "profile",
          component: () => import("@/pages/user/profile.vue"),
          meta: {
            title: "账号信息",
          },
        },
        {
          path: "feedback",
          component: () => import("@/pages/user/feedback.vue"),
          meta: {
            title: "信息反馈",
          },
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
