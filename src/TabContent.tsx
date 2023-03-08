import React from "react";
 
const TabContent = ({id, activeTab, children} : { id: string, title: string; activeTab: string, children: string }) => {
 return (
   activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
 
export default TabContent;