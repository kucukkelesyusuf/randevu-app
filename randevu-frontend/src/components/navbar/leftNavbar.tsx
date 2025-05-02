import { useSideBar } from '../../hooks/useSideBar'
import { Menu, Sidebar } from 'lucide-react';

export const LeftNavbar = () => {

    const {ToggleSidebar} = useSideBar();

  return (
    <div className=''>

        <div className="space-x-4 hidden min-[1000px]:flex p-2">
        <Sidebar
          onClick={() => ToggleSidebar()}
          className="cursor-pointer w-6 h-6"
        />
      </div>
    
      <Menu 
        onClick={()=>ToggleSidebar()}
        className="cursor-pointer w-6 h-6 block min-[1000px]:hidden"
      />
    </div>
  )
}
