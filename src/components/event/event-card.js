import { useMemo, useState } from 'react'
import './event-card.scss'
import { SummaryTab, AgendaTab, RegistrationTab } from './tabs'

const { Header, Content, Footer, Sider } = Layout

import { Card, Divider, Layout, Space, Tabs, Typography } from 'antd'
const { Text, Title } = Typography
const { Meta } = Card

export const EventCard = ({ event, markdown }) => {
  const [currentTab, setCurrentTab] = useState(0)

  const tabs = useMemo(() => [
    { title: 'Event Summary', content: <SummaryTab event={ event } markdown={ markdown } />, },
    { title: `Registration`,  content: <RegistrationTab url={ event.whitepapersFormURL } /> },
    { title: `Agenda`,        content: <AgendaTab url={ event.agendaURL } /> },
  ], [])
  const tabList = useMemo(() => Object.keys(tabs).map(key => tabs[key].content ? ({ key, tab: tabs[key].title }) : null).filter(tab => tab !== null), [tabs])
  const tabContents = useMemo(() => Object.keys(tabs).reduce((obj, key) => tabs[key].content ? ({ ...obj, [key]: tabs[key].content }) : obj, {}), [tabs])

  const handleChangeTab = key => setCurrentTab(key)

  return (
    <Card
      className="event"
      title={ event.title }
      headStyle={{ fontSize: '200%', textAlign: 'center' }}
      tabList={ tabList }
      onTabChange={ key => handleChangeTab(key, 'key') }
    >
      { tabContents[currentTab] }
    </Card>
  )
}

