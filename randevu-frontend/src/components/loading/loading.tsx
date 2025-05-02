import { useSelector } from "react-redux"

export const Loading = () => {

    const {loading} = useSelector((store:any)=>store.ui)


  return (
    <div className={`loading ${loading ? 'block' : 'hidden'}`}>  </div>
  )
}
