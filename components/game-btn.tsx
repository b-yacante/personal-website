'use client'
export interface GameButtonProps {
  color: string
  type?: string
  children: React.ReactNode
}
export default function GameButton(props: GameButtonProps) {
  return (
    <button className={`h-11 w-fit bg-${props.color} rounded`}>
      {props.children}
    </button>
  )
}
