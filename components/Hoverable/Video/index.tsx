type Props = {
  src: string
  className: string
}

export default function HoverableVideo({ src, className }: Props) {
  return (
    <div className="opacity-50 hover:opacity-100">
      <video src={src} className={className} />
    </div>
  )
}
