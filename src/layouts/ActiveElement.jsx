import classNames from 'classnames'

export default function ActiveElement({ children, handleClick, label, active = false }) {
  const classes = classNames(
    'rounded-xl p-2 focus:outline:none',
    { 'bg-white/80 shadow': active },
    { 'transition-transform hover:scale-125': !active }
  )
  return (
    <button aria-label={label} onClick={handleClick} className={classes}>
      {children}
    </button>
  )
}
