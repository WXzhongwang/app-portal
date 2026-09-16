import { Card, Col, Row, Statistic, Typography } from 'antd';

/**
 * 门户与工作台（骨架）。
 * 仅依赖基座下发的运行时上下文：用户信息、权限码、请求实例（TODO @platform/*）。
 */
export function App() {
  return (
    <div style={{ padding: 24 }}>
      <Typography.Title level={3}>工作台</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic title="待办事项" value={0} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="待我审批" value={0} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="本月考勤" value="--" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="通知" value={0} />
          </Card>
        </Col>
      </Row>
      <Card style={{ marginTop: 16 }}>
        <Typography.Text type="secondary">
          app-portal 骨架就绪：qiankun 子应用 + 独立运行双模式（npm run dev 直接打开即独立模式）。
        </Typography.Text>
      </Card>
    </div>
  );
}
