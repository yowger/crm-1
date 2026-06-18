import { useState } from "react"
import { Avatar, Badge, List, Skeleton, Typography } from "antd"

import { renderDateRange } from "../../utils/date"

const { Text } = Typography

export const UpcomingEvents = () => {
    const [isLoading] = useState(false)

    const events = [
        {
            id: 1,
            title: "Client Meeting",
            description:
                "Quarterly business review with the client to discuss sales performance and upcoming opportunities.",
            startDate: new Date("2026-06-19T09:00:00"),
            endDate: new Date("2026-06-19T10:00:00"),
            color: "green",
        },
        {
            id: 2,
            title: "Product Demo",
            description:
                "Demonstration of the new CRM dashboard features for prospective customers.",
            startDate: new Date("2026-06-19T13:00:00"),
            endDate: new Date("2026-06-19T14:00:00"),
            color: "blue",
        },
        {
            id: 3,
            title: "Sales Review",
            description:
                "Weekly sales pipeline review and forecasting session with the sales team.",
            startDate: new Date("2026-06-20T09:00:00"),
            endDate: new Date("2026-06-20T10:30:00"),
            color: "orange",
        },
    ]

    if (isLoading) {
        return (
            <List
                dataSource={[1, 2, 3, 4]}
                renderItem={(item) => (
                    <List.Item key={item}>
                        <Skeleton
                            active
                            avatar
                            title={{ width: "50%" }}
                            paragraph={{ rows: 1 }}
                        />
                    </List.Item>
                )}
            />
        )
    }

    return (
        <List
            dataSource={events}
            renderItem={(event) => (
                <List.Item key={event.id}>
                    <List.Item.Meta
                        avatar={
                            <Badge color={event.color}>
                                <Avatar>{event.title.charAt(0)}</Avatar>
                            </Badge>
                        }
                        title={event.title}
                        description={
                            <>
                                <Text
                                    type="secondary"
                                    ellipsis={{ tooltip: true }}
                                >
                                    {event.description}
                                </Text>

                                <br />

                                <Text type="secondary">
                                    {renderDateRange(event.startDate, event.endDate)}
                                </Text>
                            </>
                        }
                    />
                </List.Item>
            )}
        />
    )
}
