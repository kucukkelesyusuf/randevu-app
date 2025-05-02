import { Archive, Import, Info, MessageSquareText, NotebookPen, SquareActivity, Stethoscope} from "lucide-react";
import { ISideBarItem } from "./doctor";


export const Personel:ISideBarItem[] = 
[
    {
        title:"Hastane İşlemleri",
        items:[
            {
                icon:Import  ,
                text:"Hasta Kayıt İşlemleri",
                link:"/personel/patient/doctor/notes"
            },
            {
                icon:Info ,
                text:"Hasta Bilgileri",
                link:"/personel/patient/information"
            },
            {
                icon:Stethoscope  ,
                text:"Doktor Notları",
                link:"/personel/patient/doctor/notes"
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