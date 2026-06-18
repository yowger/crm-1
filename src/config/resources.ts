import { IResourceItem } from "@refinedev/core"

export const resources: IResourceItem[] = [
    {
        name: "dashboard",
        list: "/dashboard",
        meta: {
            label: "Dashboard",
            icon: "DashboardOutlined",
            // requiresAuth: true,
        },
    },
]
