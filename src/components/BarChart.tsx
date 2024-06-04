import { ResponsiveBar, ResponsiveBarSvgProps, BarDatum } from '@nivo/bar'

// import * as T from './BarChart.type'

const BarChart = ({ ...props }: ResponsiveBarSvgProps<BarDatum>) => <ResponsiveBar {...props} />

export default BarChart