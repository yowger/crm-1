import { Card, Col, Row, Space } from "antd"
import { CalendarOutlined } from "@ant-design/icons"

import { UpcomingEvents } from "./UpcomingEvents"
import { DealsChart } from "./DealsChart"

export const Home = () => {
    return (
        <div style={{ padding: 24 }}>
            <Row gutter={[32, 32]} style={{ marginTop: 32 }}>
                <Col xs={24} sm={24} xl={8}>
                    <Card
                        title={
                            <Space size={16}>
                                <CalendarOutlined />
                                <span>Upcoming Events</span>
                            </Space>
                        }
                    >
                        <div
                            style={{
                                height: "100%",
                                overflow: "auto",
                            }}
                        >
                            <UpcomingEvents />
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={24} xl={8}>
                    <Card title="Calendar 2">
                        <div style={{ height: "100%", overflow: "auto" }}>
                            <DealsChart />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
