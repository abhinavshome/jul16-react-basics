import { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div>
      {currentTab}
      <div className="tab-headers">
        <span
          onClick={() => setCurrentTab(1)}
          className={currentTab === 1 ? "selected" : ""}
        >
          Tab1
        </span>
        <span
          onClick={() => setCurrentTab(2)}
          className={currentTab === 2 ? "selected" : ""}
        >
          Tab2
        </span>
        <span
          onClick={() => setCurrentTab(3)}
          className={currentTab === 3 ? "selected" : ""}
        >
          Tab3
        </span>
        <span
          onClick={() => setCurrentTab(4)}
          className={currentTab === 4 ? "selected" : ""}
        >
          Tab4
        </span>
      </div>
      <div>
        <div className={currentTab === 1 ? "shown" : "hidden"}>
          Tab1 contents
        </div>
        {currentTab === 2 && <div>Tab2 contents</div>}
        {currentTab === 3 ? <div>Tab3 contents</div> : ""}
        <div style={{ display: currentTab === 4 ? "block" : "none" }}>
          Tab4 contents
        </div>
      </div>
    </div>
  );
};

export default Tabs;
