import { useState, useRef, useEffect } from 'react'
import { Text } from '@ui5/webcomponents-react'
import useMountTransition from '../hooks/useMountTransition'
import StackTabs from './StackTabs'
import Projects from './Projects'
import Teams from './Teams'
import Footer from './Footer'
import Contact from './Contact'

export default function MainSection() {
  const [isMounted, setIsMounted] = useState(false)
  const hasTransitionedIn = useMountTransition(isMounted, 2 * 1000)
  const shouldRun = useRef(true)

  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false
      setIsMounted(true)
    }
  }, [])

  return (
    <main className="h-full">
      {isMounted && (
        <div
          className="transition duration-500"
          style={{
            opacity: hasTransitionedIn ? 1 : 0,
            transform: hasTransitionedIn ? 'translateY(0)' : 'translateY(15px)',
          }}
        >
          <StackTabs />
          <Text className="invisible ml-6 mt-8 text-2xl font-bold xs:visible">Teams</Text>
        </div>
      )}
      <div className="invisible flex flex-wrap justify-around xs:visible">
        <Teams />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
