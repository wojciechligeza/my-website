import cv from '../assets/wl_cv_en.pdf'

export default function Contact() {
  return (
    <nav className="m-4 flex items-center justify-center gap-8 sm:hidden">
      <div
        role="button"
        className="rounded-xl bg-white p-2 shadow transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        <a href="mailto:wojciech.ligeza@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8 text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </a>
      </div>
      <div role="button" className="p-2 transition-transform duration-300 hover:scale-110">
        <a href="https://www.linkedin.com/in/wojciech-lig%C4%99za-9883171a1/" target="_blank" rel="noreferrer noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 310"
            fill="currentColor"
            className="h-8 w-8 text-slate-400"
          >
            <g fillRule="evenodd" clipRule="evenodd">
              <path
                d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
              />
              <path
                d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
              />
              <path
                d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
              />
            </g>
          </svg>
        </a>
      </div>
      <div
        role="button"
        className="rounded-xl bg-white p-2 shadow transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        <a href={cv} download="Wojciech's CV">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8 text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
            />
          </svg>
        </a>
      </div>
    </nav>
  )
}
