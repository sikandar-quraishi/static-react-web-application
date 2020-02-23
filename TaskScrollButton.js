import React from "react";
import Button from "@material-ui/core/Button";
import NavigationIcon from "@material-ui/icons/Navigation";
import { scroller } from "react-scroll";

const TaskScrollButton = () => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -134
    });
  };
  return (
    <div>
      <Button
        onClick={() => scrollToElement("Featured")}
        size="small"
        color="secondary"
        aria-label="add"
        style={{ backgroundColor: "#2c2c2c", color: "#ffffff" }}
      >
        <NavigationIcon />
      </Button>
    </div>
  );
};

export default TaskScrollButton;
