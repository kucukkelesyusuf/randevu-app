import { Archive, FileChartColumnIncreasing, LucideProps, MessageSquareText, NotebookPen, Radiation, SquareActivity, User, Users } from "lucide-react";


export interface Item {

    icon:React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    text:string,
    link:string

}

export interface ISideBarItem {
    title:string;
    items:Item[]
}

export const Doctor:ISideBarItem[] = 
[
    {
        title:"Hasta İşlemleri",
        items:[
            {
                icon:User,
                text:"Hastalarım",
                link:"/doctor/patient"
            },
            {
                icon:FileChartColumnIncreasing,
                text:"Tahlil Sonuç Gösterim",
                link:"/doctor/patient"
            },
            {
                icon:Users,
                text:"Hasta Kabul",
                link:"/doctor/patient"
            },
            {
                icon:Radiation,
                text:"Radyoloji Sonuç Gösterim",
                link:"/doctor/patient"
            }
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