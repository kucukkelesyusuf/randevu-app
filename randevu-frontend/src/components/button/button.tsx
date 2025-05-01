import { PropsWithChildren } from "react"


interface IButton extends PropsWithChildren {
    className?:string;
    variant:"blue" | "red" |"black"|"green"|"white"|"c";
    type?:"submit" | "button"
    disabled?:boolean
    onClick?:any
}

export const Button = (props:IButton) => {
    console.log(props.onClick)
  return (
    <button className={`btn  ${props.disabled ? `btn-${props.variant}-disabled` : `btn-${props.variant}`} ${props.className ? props.className : ''}`} onClick={()=>props.onClick ? props.onClick() : ()=>{}} type={props.type}>
        {props.children}
    </button>
  )
}
