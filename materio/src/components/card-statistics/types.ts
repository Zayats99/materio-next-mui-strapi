// ** React Imports
import { ReactNode } from 'react'

// ** Types
import { ThemeColor } from 'src/templates/layouts/types'

export type CardStatsProps = {
  title: string
  stats: string
  icon: ReactNode
  subtitle: string
  color?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}
