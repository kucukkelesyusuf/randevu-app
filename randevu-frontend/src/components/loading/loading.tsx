import { useSelector } from "react-redux"

export const Loading = () => {

    const {loading} = useSelector((store:any)=>store.ui)
    console.log(loading);

  return (
    <div className={`loading ${loading ? 'block' : 'hidden'}`}>  </div>
  )
}
