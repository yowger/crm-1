import { Dropdown, MenuProps } from "antd"
import { useGetIdentity, useGo, useLogout } from "@refinedev/core"
import {
    SettingOutlined,
    UserOutlined,
    LogoutOutlined,
} from "@ant-design/icons"

import { CustomAvatar } from "../CustomAvatar"
import type { UserIdentity } from "../../types/auth"

export const CurrentUser = () => {
    const { data: user } = useGetIdentity<UserIdentity>()
    const go = useGo()
    const { mutate: logout } = useLogout()

    const items: MenuProps["items"] = [
        {
            key: "user",
            label: (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "4px 8px",
                    }}
                >
                    <span style={{ fontWeight: 600, color: "#333" }}>
                        {user?.name}
                    </span>
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
            key: "profile",
            icon: <UserOutlined />,
            label: "My Profile",
            onClick: () => go({ to: "/profile" }),
        },
        {
            key: "settings",
            icon: <SettingOutlined />,
            label: "Account Settings",
            onClick: () => go({ to: "/settings" }),
        },
        {
            type: "divider",
        },
        {
            key: "logout",
            icon: <LogoutOutlined />,
            danger: true,
            label: "Log Out",
            onClick: () => logout(),
        },
    ]

    return (
        <Dropdown menu={{ items }} trigger={["click"]}>
            <CustomAvatar
                name={user?.name ?? "User"}
                src={user?.avatar}
                size="default"
            />
        </Dropdown>
    )
}
