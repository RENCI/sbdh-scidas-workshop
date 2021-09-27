import { Space, Typography } from 'antd'

const { Title } = Typography

export const AgendaTab = ({ url }) => {
  return (
    <Space direction="vertical">
      <Title level={ 2 }>Agenda</Title>
      <iframe src={ url } height="1050" width="805"></iframe>
    </Space>
  )
}

