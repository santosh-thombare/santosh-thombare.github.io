type TListItem = {
    id: string,
    listTitle: string,
    listItems : string[]
};

type TTabs = {
    id: string,
    tabTitle: string,
    content: TListItem[]
};

export const newTabs: TTabs[] = [
    {
        id:"1",
        tabTitle:"Skills",
        content:[{
            id: "1",
            listTitle: "Web Development",
            listItems : ["Web Application Development"]
        },
        {
        id: "2",
            listTitle: "UI/UX",
            listItems : ["Designing Web/App Interfaces"]
        },
        {
        id: "3",
            listTitle: "Mobile Development",
            listItems : ["Building Frontend for Mobile App"]
        }
    ]
    },
    {
        id:"2",
        tabTitle:"Experience",
        content:[{
            id: "a",
            listTitle: "2016 - Current, Frontend Developer & UI/UX Designer",
            listItems : [
                "- Lead team of designer and front-end developer",
                "- Lead the RPM, TIFM and Jobchain project which has multiple portals with mobile application",
                `- Team lead on Front-end side from UI/UX to fully interactive modules integration, designed and developed complete 
                design process from initial phase.`

            ]
        },
        {
        id: "b",
            listTitle: "2015 - 2016, Web Developer ",
            listItems : [
                "- Built CRM web application for real estate industry ",
                "- Worked in report generation section, which has 23+ different reports",
                "- Worked on responsive screens for tablet view"
                ]
        }
    ]
    },
    {
        id:"3",
        tabTitle:"Education",
        content:[{
            id: "1",
            listTitle: "2013",
            listItems : ["Bachelors in Computer Engineering, Mumbai University"]
        },
        {
        id: "2",
            listTitle: "2010",
            listItems : ["Diploma in Computer Engineering, MSBTE"]
        }
    ]
    },
];