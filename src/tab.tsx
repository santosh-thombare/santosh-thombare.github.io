import { useState } from "react";

export default function Tabs(){
 
    const[currentTab, setCurrentTab] = useState("1");
    const tabs = [
        {
            id:"1",
            tabTitle:"Skills",
            content:<ul><li><span>Web Development</span><br/> Web Application Development</li> <li><span>UI/UX</span><br/> Designing Web/App Interfaces</li>           <li><span>Mobile Development</span><br/> Building Frontend for Mobile App</li></ul>
        },
        {
            id:"2",
            tabTitle:"Experience",
            content:
                <ul>
                <li><span>2016 - Current</span><br/>Frontend Developer & UI/UX Designer 
                    <br/>
                    <ul>
                        <li>- Lead team of designer and front-end developer</li>
                        <li>- Lead the RPM, TIFM and Jobchain project which has multiple portals with mobile application</li>
                        <li>- Team lead on Front-end side from UI/UX to fully interactive modules integration, designed and developed complete 
                            design process from initial phase.</li>
                    </ul>
                </li>
                <li><span>2015 - 2016</span><br/>Web Developer 
                    <br/>
                    <ul>
                        <li>- Built CRM web application for real estate industry </li>
                        <li>- Worked in report generation section, which has 23+ different reports</li>
                        <li>- Worked on responsive screens for tablet view</li>
                    </ul>
                </li>
            </ul>
        },
        {
            id:"3",
            tabTitle:"Education",
            content:<ul>
                <li><span>2013</span><br/> Bachelors in Computer Engineering, Mumbai University</li>
                <li><span>2010</span><br/> Diploma in Computer Engineering, MSBTE</li>
            </ul>
        }
    ]

    const handleClick = (e:any) => {
        setCurrentTab(e.target.id)
        console.log(e.target.id,"checked");
    }

    return(
        <div>
            <div className="tab-titles">
                {tabs.map((tab, i) => 
                    <button
                        className={currentTab === `${tab.id}` ? "tab-links active" : " tab-links"}
                        key={i}
                        id={tab.id}
                       // disabled={currentTab === `${tab.id}`}
                        onClick={(handleClick)}
                    >{tab.tabTitle}</button>
                )}
            </div>
            <div className="content">
                {tabs.map((tab, i) => 
                    <div key={i} >
                        {currentTab === `${tab.id}` &&
                            <div className="tab-contents">{tab.content}</div>
                        }
                    </div>
                )}
            
            </div>
        </div>
    )

}