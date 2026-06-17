import { Avatar } from "antd"
import type { AvatarProps } from "antd"

type CustomAvatarProps = AvatarProps & {
    name: string
}

const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
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
            {getInitials(name)}
        </Avatar>
    )
}
