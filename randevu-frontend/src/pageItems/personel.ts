import { Archive, MessageSquareText, NotebookPen, SquareActivity, User } from "lucide-react";
import { ISideBarItem } from "./doctor";


export const Personel:ISideBarItem[] = 
[
    {
        title:"Hastane İşlemleri",
        items:[
            {
                icon:User,
                text:"Hastalarım",
                link:"/doctor/patient"
            },
          
        ]
    },
    {
        title:"Kurum İçi",
        items:[
            {
                icon:NotebookPen,
                text:"Notlarım",
                link:"/doctor/patient"
            },
            {
                icon:MessageSquareText,
                text:"Mesajlar",
                link:"/doctor/patient"
            },
            {
                icon:Archive,
                text:"Kurum Arşivi",
                link:"/doctor/patient"
            },
            {
                icon:SquareActivity,
                text:"Görev Planlaması",
                link:"/doctor/patient"
            }
        ]
    },
]