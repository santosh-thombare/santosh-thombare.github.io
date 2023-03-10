import { useState } from "react";
import { newTabs } from "../data/tabs"


export default function Tabs() {

    const [currentTab, setCurrentTab] = useState<string>("1");

    const handleClick = (id: string) => {
        setCurrentTab(id)
    }

    return (
        <div>
            <div className="tab-titles">
                {newTabs.map((tab, i) =>
                    <button
                        className={currentTab === `${tab.id}` ? "tab-links active" : " tab-links"}
                        key={i}
                        id={tab.id}
                        // disabled={currentTab === `${tab.id}`}
                        onClick={() => { handleClick(tab.id) }}
                    >{tab.tabTitle}</button>
                )}
            </div>
            <div className="content">
                {newTabs.map((tab, i) =>
                    <div key={i} >
                        {currentTab === `${tab.id}` &&
                            <div className="tab-contents">
                                {tab.content.map((tabContent, i) =>
                                    <ul>
                                        <li key={i}><span>{tabContent.listTitle}</span></li>
                                        {tabContent.listItems.map((listItem, i) =>
                                            <li> {listItem}<br /></li>)}
                                    </ul>
                                )}
                            </div>
                        }
                    </div>
                )}

            </div>
        </div>
    )

}