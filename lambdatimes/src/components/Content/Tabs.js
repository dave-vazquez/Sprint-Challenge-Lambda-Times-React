import React from "react";
import PropType from "prop-types";
import Tab from "./Tab";
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, i) => (
          <Tab
            key={i}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={tab}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.PropType = {
  tabs: PropType.arrayOf(PropType.string),
  selectedTab: PropType.string,
  selectTabHanlder: PropType.func
};

export default Tabs;
