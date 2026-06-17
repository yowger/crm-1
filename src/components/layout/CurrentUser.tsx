import { Dropdown, MenuProps } from "antd"
import { useGetIdentity } from "@refinedev/core"

import { CustomAvatar } from "../CustomAvatar"
import type { UserIdentity } from "../../types/auth"

export const CurrentUser = () => {
    const { data: user } = useGetIdentity<UserIdentity>()

    const items: MenuProps["items"] = [
        {
            key: "user",
            label: (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontWeight: 500 }}>{user?.name}</span>
                    <span style={{ fontSize: 12, opacity: 0.6 }}>
                        {user?.email}
                    </span>
                </div>
            ),
        },
        {
            type: "divider",
        },
        {
            key: "settings",
            label: "Settings",
        },
        {
            key: "profile",
            label: "Profile",
        },
    ]

    return (
        <Dropdown menu={{ items }} trigger={["click"]}>
            <CustomAvatar
                name={user?.name ?? "User"}
                src={user?.avatar}
                size="default"
                style={{ cursor: "pointer" }}
            />
        </Dropdown>
    )
}
