import { Popover } from "antd"
import { useGetIdentity } from "@refinedev/core"

import { CustomAvatar } from "../CustomAvatar"

export const CurrentUser = () => {
    const { data: user } = useGetIdentity<{ name: string }>()

    return (
        <Popover placement="bottomRight" trigger="click">
            <CustomAvatar name={user?.name ?? "User"} />
        </Popover>
    )
}
