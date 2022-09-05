import { Text } from '@ui5/webcomponents-react'
import classNames from 'classnames'

export default function StackTab({ label, selected, handleClick }) {
  const classes = {
    btn: classNames('mx-1 flex items-center justify-center rounded-xl focus:outline:none', {
      'bg-white/60 shadow': selected,
    }),
    text: classNames('overflow-hidden p-2 text-xs font-bold', {
      'text-slate-400': !selected,
    }),
  }
  return (
    <button className={classes.btn} onClick={handleClick}>
      <Text className={classes.text}>{label}</Text>
    </button>
  )
}
