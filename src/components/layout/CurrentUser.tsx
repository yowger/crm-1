import { Popover } from "antd"
import { useGetIdentity } from "@refinedev/core"

import { CustomAvatar } from "../CustomAvatar"
import type { UserIdentity } from "../../types/auth"

export const CurrentUser = () => {
    const { data: user } = useGetIdentity<UserIdentity>()

    return (
        <Popover placement="bottomRight" trigger="click">
            <CustomAvatar
                name={user?.name ?? "User"}
                src={user?.avatar}
                size="default"
                style={{ cursor: "pointer" }}
            />
        </Popover>
    )
}
