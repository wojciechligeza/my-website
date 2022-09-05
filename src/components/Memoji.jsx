import { lazy, useMemo, useRef, Suspense } from 'react'
import debounce from 'lodash.debounce'
import memoji from '../assets/memoji-421.webp'

const toastMessages = ['Hello!', 'Hi!']

const Toast = lazy(() =>
  import('@ui5/webcomponents-react/dist/webComponents/Toast').then(module => ({ default: module.Toast }))
)

export default function Memoji() {
  const toast = useRef()

  const toastHandler = () => toast.current.show()

  const debouncedToastHandler = useMemo(() => debounce(toastHandler, 750), [])

  return (
    <>
      <figure
        onMouseEnter={debouncedToastHandler}
        className="ml-4 h-20 w-20 cursor-wait touch-none overflow-hidden rounded-full transition-transform duration-500 hover:scale-105"
      >
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${memoji})` }} />
      </figure>
      <Suspense>
        <Toast ref={toast} placement="TopEnd" style={{ opacity: 0.6 }}>
          <em>{toastMessages[Math.floor(Math.random() * toastMessages.length)]}</em>
        </Toast>
      </Suspense>
    </>
  )
}
