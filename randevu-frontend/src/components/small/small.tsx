import { PropsWithChildren } from "react"

interface Ismall extends PropsWithChildren{
    className?:string
}

export const Small = (props:Ismall) => {
  return (
    <small className={ `small ${props.className ? props.className : ''}`} >{props.children}</small>
  )
}
