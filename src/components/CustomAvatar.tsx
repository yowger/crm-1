import { Avatar } from "antd"
import type { AvatarProps } from "antd"

import { getNameInitials } from "../utils/getNameInitials"

type CustomAvatarProps = AvatarProps & {
    name?: string
}

export const CustomAvatar = ({ name, style, ...rest }: CustomAvatarProps) => {
    return (
        <Avatar
            {...rest}
            size="small"
            style={{
                backgroundColor: "#87d068",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...style,
            }}
        >
            {name ? getNameInitials(name) : ""}
        </Avatar>
    )
}
