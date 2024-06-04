import { ResponsiveBarSvgProps, BarDatum } from "@nivo/bar";
import { COMMISSION_CHART_MOCKED_DATA } from "./data";

export const nivoBarModule: ResponsiveBarSvgProps<BarDatum> = {
  data: COMMISSION_CHART_MOCKED_DATA,
  keys: ["Recebida", "A receber"],
  indexBy: "month",
  margin: { top: 10, right: 0, bottom: 50, left: 70 },
  padding: 0.48,
  valueScale: { type: "linear" },
  indexScale: { type: "band", round: true },
  colors: ["#004BB7", "#00cf98"],
  colorBy: "id",
  axisLeft: { tickSize: 0, tickPadding: 8 },
  axisBottom: { tickSize: 0, tickPadding: 8, legendPosition: "middle" },
  enableLabel: false,
  legends: [
    {
      dataFrom: "keys",
      anchor: "bottom",
      direction: "row",
      justify: false,
      translateX: 32,
      translateY: 50,
      itemsSpacing: 2,
      itemWidth: 180,
      itemHeight: 20,
      itemDirection: "left-to-right",
      symbolSize: 8,
    },
  ],
  theme: {
    axis: {
      ticks: {
        text: { fontSize: 12, fill: "#636363" },
      },
    },
    legends: {
      text: { fontSize: 12, fill: "#021B9C" },
    },
    grid: { line: { strokeWidth: 1, strokeDasharray: "4 4" } },
  },
  role: "application",
  barAriaLabel: (e: any) =>
    e.id + ": " + e.formattedValue + " in month: " + e.indexValue,
  animate: false,
};
