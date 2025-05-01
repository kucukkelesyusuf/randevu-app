import { PropsWithChildren } from "react"


interface IHeader extends PropsWithChildren{
    className?:string,
}

export const Header = (props:IHeader) => {
  return (
    <h2 className={`header ${props.className ?  props.className : ''}`} >{props.children}</h2>
  )
}
