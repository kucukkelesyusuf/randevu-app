
interface IInput {
    className?:string,
    placeHolder?:string;
    value:string
    setValue:any
}

export const Input = (props:IInput) => {
  return (
    <input value={props.value} onChange={(e)=>props.setValue(e.target.value)} className={`focus:outline-none border-[0.15rem] border-slate-200 bg-gray-100 transition-all duration-200 hover:bg-gray-100/40 text-gray-600 rounded-md pl-4 pt-1 pb-1  ${props.className ? props.className : ''}`} placeholder={props.placeHolder} />
  )
}
