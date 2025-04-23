import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default
 [index("routes/home.tsx"),
 route("about", "routes/about.tsx"),
 route("post/:postId", "routes/post.tsx"),
 //nested routes
 route("dashboards","routes/dashboards.tsx",[
route("finances", "routes/finances.tsx"),
route("personal-info","routes/personsl-info")
 ]),
]satisfies RouteConfig;
