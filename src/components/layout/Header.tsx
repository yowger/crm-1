import { Layout, Space } from "antd"
import { CurrentUser } from "./CurrentUser"
import React from "react"

const headerStyles: React.CSSProperties = {
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 1rem",
    position: "sticky",
    zIndex: 999,
    top: 0,
}

export const Header = () => {
    return (
        <Layout.Header style={headerStyles}>
            <Space align="center" size="middle">
                <CurrentUser />
            </Space>
        </Layout.Header>
    )
}
