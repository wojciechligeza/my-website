import { useState } from 'react'
import { DonutChart } from '@ui5/webcomponents-react-charts'

export default function Teams() {
  const [activeSegment, setActiveSegment] = useState()
  const [noLegendDisplayed, setNoLegendDisplayed] = useState(false)
  return (
    <section className="mt-4 flex flex-col">
      <div className="mx-4 mb-4 h-[208px] w-[328px] rounded-3xl bg-white shadow-lg sm:h-[280px] sm:w-[440px]">
        <DonutChart
          noLegend={noLegendDisplayed}
          chartConfig={{
            activeSegment: activeSegment,
            showActiveSegmentDataLabel: true,
          }}
          dataset={[
            {
              project: 'Freelancers',
              time: 16,
            },
            {
              project: 'Accenture',
              time: 26,
            },
            {
              project: 'Consalit',
              time: 6,
            },
          ]}
          dimension={{
            accessor: 'project',
          }}
          measure={{
            accessor: 'time',
            formatter: value => `${value} months`,
          }}
          onClick={event => event.target.tagName === 'text' && setNoLegendDisplayed(prev => !prev)}
          onDataPointClick={event => setActiveSegment(event.detail.dataIndex)}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </section>
  )
}
