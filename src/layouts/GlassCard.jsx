import classNames from 'classnames'

export default function GlassCard({ children, tw }) {
  const classes = classNames('flex flex-grow flex-col rounded-3xl bg-white/60 shadow backdrop-blur-xl m-2', tw)
  return <section className={classes}>{children}</section>
}
