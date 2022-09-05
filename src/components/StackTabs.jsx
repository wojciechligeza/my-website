import { useState, useMemo } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import BackendTech from './BackendTech'
import FrontendTech from './FrontendTech'
import StackTab from './StackTab'

export default function StackTabs() {
  const [tabs, setTabs] = useState([
    {
      label: 'Frontend',
      selected: true,
      content: <FrontendTech />,
    },
    { label: 'Backend', selected: false, content: <BackendTech /> },
  ])

  const [parent] = useAutoAnimate()

  const selectedTab = useMemo(() => tabs.find(tab => tab.selected === true), [tabs])

  const handleClick = id => {
    setTabs(prev => prev.map(el => (el.label === id ? { ...el, selected: true } : { ...el, selected: false })))
  }

  return (
    <section ref={parent}>
      <div className="mx-4 mt-8 flex h-10 w-[150px] items-center justify-center rounded-xl bg-slate-400/40 shadow backdrop-blur-xl">
        {tabs.map((tab, i) => (
          <StackTab key={i} label={tab.label} selected={tab.selected} handleClick={() => handleClick(tab.label)} />
        ))}
      </div>
      {selectedTab.content}
    </section>
  )
}
