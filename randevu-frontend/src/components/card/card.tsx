import { PropsWithChildren } from "react"

interface ICard extends PropsWithChildren {
    className?:string
}

const Card = (props:ICard) => {
  return (
    <div className={`card ${props.className ? props.className : ""}`}>
         {props.children}
    </div>
  )
}

export default Card