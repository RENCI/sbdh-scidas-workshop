import { EventCard } from './event/event-card'
import './app.scss'
import { Layout } from 'antd'
import Markdown, * as event from '../content/scidas-workshop.md'
import { Icon } from './icons'

const { Footer } = Layout

export const App = () => {
  return (
    <div className="app">
      <Layout className="layout">
        <EventCard event={ event } markdown={ <Markdown /> } />
      </Layout>
      <Footer className="footer">
        <div>RENCI &copy; 2021</div>
        <div>
          <a
            href="https://github.com/RENCI/sbdh-scidas-workshop/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="View source for this page"
          >
            <Icon icon="github" fill="var(--color-unc-white)" className="github-icon" />
          </a>
        </div>
      </Footer>
    </div>
  )
}
