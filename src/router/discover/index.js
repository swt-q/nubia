export default {
    path: "/discover",
    name: "discover",
    component: () => import("@pages/discover"),
    children: [
        {
            path: "/discover",
            redirect: "/discover/hotReview"
        },
        {
            path: "hotReview",
            name: "hotReview",
            component: () => import("@components/discoverHotReview")
        },
        {
            path: "experience",
            name: "experience",
            component: () => import("@components/discoverExperience")
        },
        {
            path: "newsCenter",
            name: "newsCenter",
            component: () => import("@components/discoverNewsCenter")
        },
        {
            path: "video",
            name: "video",
            component: () => import("@components/discoverVideo")
        },

    ]
}