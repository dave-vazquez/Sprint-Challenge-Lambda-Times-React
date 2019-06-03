import React from "react";
import PropType from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  const onClickHandler = () => {
    props.selectTabHandler(props.tab);
  };

  return (
    <div
      className={`tab${props.tab === props.selectedTab ? " active-tab" : ""}`}
      onClick={onClickHandler}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.PropType = {
  tabs: PropType.arrayOf(PropType.string),
  selectedTab: PropType.string,
  selectTabHanlder: PropType.func
};

export default Tab;
