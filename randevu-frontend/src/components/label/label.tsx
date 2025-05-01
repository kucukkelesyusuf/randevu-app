import { PropsWithChildren } from "react"


interface Ilabel extends PropsWithChildren{
    className?:string;
}

export const Label = (props:Ilabel) => {
  return (
    <label className={`label ${props.className ? props.className : ''}`}>
          {props.children}
    </label>
  )
}
