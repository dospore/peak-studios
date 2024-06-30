type Props = {
  children?: React.ReactNode
}

export default function HoverableImage({ children }: Props) {
  return (
    <div className="opacity-50 hover:opacity-100">
      {children}
    </div>
  )
}
