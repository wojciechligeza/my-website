import { lazy, Suspense, useState, useRef, useEffect } from 'react'
import useMountTransition from './hooks/useMountTransition'
import GlassCard from './layouts/GlassCard'
import SideMenu from './components/SideMenu'
import Header from './components/Header'
import About from './components/About'

const MainSection = lazy(() =>
  new Promise(resolve => setTimeout(resolve, 10 * 1000)).then(() => import('./components/MainSection'))
)

export default function App() {
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
    <>
      {isMounted && (
        <div
          className="m-2 flex w-[98%] max-w-[1440px] flex-grow justify-center rounded-3xl border border-white/20 bg-white/10 pt-2 shadow backdrop-blur-xl transition duration-500"
          style={{
            opacity: hasTransitionedIn ? 1 : 0,
            transform: hasTransitionedIn ? 'scale(1)' : 'scale(0.5)',
          }}
        >
          <SideMenu />
          <GlassCard tw="w-[90%]">
            <Header />
            <Suspense>
              <MainSection />
            </Suspense>
          </GlassCard>
          <About />
        </div>
      )}
    </>
  )
}
