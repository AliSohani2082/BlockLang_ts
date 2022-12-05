import Draggable from "react-draggable";
import React, { useState } from "react";
import { Box, Paper } from "@mui/material";

interface FileEditorProps {
  tab: FileTab;
}

const FileEditor = (props: FileEditorProps) => {
  const { tab, ...other } = props;
  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  });

  const handleDrag = (e, ui) => {
    const { x, y } = state.deltaPosition;
    setState({
      ...state,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  const onStart = () => {
    setState({ ...state, activeDrags: ++state.activeDrags });
  };

  const onStop = () => {
    setState({ ...state, activeDrags: --state.activeDrags });
  };
  const onDrop = (e) => {
    setState({ ...state, activeDrags: --state.activeDrags });
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };
  const onDropAreaMouseEnter = (e) => {
    if (state.activeDrags) {
      e.target.classList.add("hovered");
    }
  };
  const onDropAreaMouseLeave = (e) => {
    e.target.classList.remove("hovered");
  };

  // For controlled component
  const adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = state.controlledPosition;
    setState({ ...state, controlledPosition: { x: x - 10, y } });
  };

  const adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = state;
    const { x, y } = controlledPosition;
    setState({ ...state, controlledPosition: { x, y: y - 10 } });
  };

  const onControlledDrag = (e, position) => {
    const { x, y } = position;
    setState({ ...state, controlledPosition: { x, y } });
  };

  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };
  const { deltaPosition, controlledPosition } = state;
  return (
    <Box>
      <Draggable handle="strong" {...dragHandlers}>
        <Paper
          sx={{
            background: "grey",
            width: 100,
            display: "flex",
            padding: 5,
            flexDirection: "column",
          }}
        >
          <strong>
            <Box sx={{ padding: 5, background: "brown" }}>Drag here</Box>
          </strong>
          <Box>You must click my handle to drag me</Box>
        </Paper>
      </Draggable>
      {/* <Draggable axis="x" {...dragHandlers}>
        <div className="box cursor-x">
          I can only be dragged horizonally (x axis)
        </div>
      </Draggable>
      <Draggable axis="y" {...dragHandlers}>
        <div className="box cursor-y">
          I can only be dragged vertically (y axis)
        </div>
      </Draggable>
      <Draggable onStart={() => false}>
        <div className="box">I don't want to be dragged</div>
      </Draggable>
      <Draggable onDrag={handleDrag} {...dragHandlers}>
        <div className="box">
          <div>I track my deltas</div>
          <div>
            x: {state.deltaPosition.x.toFixed(0)}, y:{" "}
            {state.deltaPosition.y.toFixed(0)}
          </div>
        </div>
      </Draggable>
      <Draggable handle="strong" {...dragHandlers}>
        <div className="box no-cursor">
          <strong className="cursor">
            <div>Drag here</div>
          </strong>
          <div>You must click my handle to drag me</div>
        </div>
      </Draggable>
      <Draggable handle="strong">
        <div
          className="box no-cursor"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <strong className="cursor">
            <div>Drag here</div>
          </strong>
          <div style={{ overflow: "scroll" }}>
            <div style={{ background: "yellow", whiteSpace: "pre-wrap" }}>
              I have long scrollable content with a handle
              {"\n" + Array(40).fill("x").join("\n")}
            </div>
          </div>
        </div>
      </Draggable>
      <Draggable cancel="strong" {...dragHandlers}>
        <div className="box">
          <strong className="no-cursor">Can't drag here</strong>
          <div>Dragging here works</div>
        </div>
      </Draggable>
      <Draggable grid={[25, 25]} {...dragHandlers}>
        <div className="box">I snap to a 25 x 25 grid</div>
      </Draggable>
      <Draggable grid={[50, 50]} {...dragHandlers}>
        <div className="box">I snap to a 50 x 50 grid</div>
      </Draggable>
      <Draggable
        bounds={{ top: -100, left: -100, right: 100, bottom: 100 }}
        {...dragHandlers}
      >
        <div className="box">I can only be moved 100px in any direction.</div>
      </Draggable>
      <Draggable {...dragHandlers}>
        <div
          className="box drop-target"
          onMouseEnter={onDropAreaMouseEnter}
          onMouseLeave={onDropAreaMouseLeave}
        >
          I can detect drops from the next box.
        </div>
      </Draggable>
      <Draggable {...dragHandlers} onStop={onDrop}>
        <div className={`box ${state.activeDrags ? "no-pointer-events" : ""}`}>
          I can be dropped onto another box.
        </div>
      </Draggable>
      <div
        className="box"
        style={{
          height: "500px",
          width: "500px",
          position: "relative",
          overflow: "auto",
          padding: "0",
        }}
      >
        <div style={{ height: "1000px", width: "1000px", padding: "10px" }}>
          <Draggable bounds="parent" {...dragHandlers}>
            <div className="box">
              I can only be moved within my offsetParent.
              <br />
              <br />
              Both parent padding and child margin work properly.
            </div>
          </Draggable>
          <Draggable bounds="parent" {...dragHandlers}>
            <div className="box">
              I also can only be moved within my offsetParent.
              <br />
              <br />
              Both parent padding and child margin work properly.
            </div>
          </Draggable>
        </div>
      </div>
      <Draggable bounds="body" {...dragHandlers}>
        <div className="box">
          I can only be moved within the confines of the body element.
        </div>
      </Draggable>
      <Draggable {...dragHandlers}>
        <div
          className="box"
          style={{ position: "absolute", bottom: "100px", right: "100px" }}
        >
          I already have an absolute position.
        </div>
      </Draggable>
      {/* <Draggable {...dragHandlers}>
        <RemWrapper>
        <div
        className="box rem-position-fix"
        style={{ position: "absolute", bottom: "6.25rem", right: "18rem" }}
        >
        I use <span style={{ fontWeight: 700 }}>rem</span> instead of{" "}
        <span style={{ fontWeight: 700 }}>px</span> for my transforms. I
        also have absolute positioning.
        <br />
        <br />I depend on a CSS hack to avoid double absolute positioning.
          </div>
        </RemWrapper>
      </Draggable> 
      <Draggable defaultPosition={{ x: 25, y: 25 }} {...dragHandlers}>
        <div className="box">
          {
            "I have a default position of {x: 25, y: 25}, so I'm slightly offset."
          }
        </div>
      </Draggable>
      <Draggable positionOffset={{ x: "-10%", y: "-10%" }} {...dragHandlers}>
        <div className="box">
          {
            "I have a default position based on percents {x: '-10%', y: '-10%'}, so I'm slightly offset."
          }
        </div>
      </Draggable>
      <Draggable
        position={state.controlledPosition}
        {...dragHandlers}
        onDrag={onControlledDrag}
      >
        <div className="box">
          My position can be changed programmatically. <br />I have a drag
          handler to sync state.
          <div>
            <a href="#" onClick={adjustXPos}>
              Adjust x ({state.controlledPosition.x})
            </a>
          </div>
          <div>
            <a href="#" onClick={adjustYPos}>
              Adjust y ({state.controlledPosition.y})
            </a>
          </div>
        </div>
      </Draggable>
      <Draggable
        position={state.controlledPosition}
        {...dragHandlers}
        onStop={onControlledDragStop}
      >
        <div className="box">
          My position can be changed programmatically. <br />I have a dragStop
          handler to sync state.
          <div>
            <a href="#" onClick={adjustXPos}>
              Adjust x ({state.controlledPosition.x})
            </a>
          </div>
          <div>
            <a href="#" onClick={adjustYPos}>
              Adjust y ({state.controlledPosition.y})
            </a>
          </div>
        </div>
      </Draggable> */}
    </Box>
  );
};

export default FileEditor;
interface RemWrapperProps {
  children: React.ReactNode;
  remBaseline: number;
  style: any;
}

export const RemWrapper = (props: RemWrapperProps) => {
  const { children, remBaseline = 16, style } = props;
  const translateTransformToRem = (transform: string, remBaseline = 16) => {
    const convertedValues = transform
      .replace("translate(", "")
      .replace(")", "")
      .split(",")
      .map((px: string) => px.replace("px", ""))
      .map((px: string) => parseInt(px, 10) / remBaseline)
      .map((x: string) => `${x}rem`);
    const [x, y] = convertedValues;

    return `translate(${x}, ${y})`;
  };

  const child = React.Children.only(children);

  const editedStyle = {
    ...child.props.style,
    ...style,
    // transform: translateTransformToRem(style.transform, remBaseline),
  };

  return React.cloneElement(child, {
    ...child.props,
    ...props,
    style: editedStyle,
  });
};
