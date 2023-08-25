import { Box, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import React, { useState } from "react";

import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "../App.css";

const Container = styled(Box)`
  flex-grow: 1;
  display: flex;
  flex-basic: 0;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: white;
  justify-content: space-between;
  font-weight: 700;
`;

function Editor({ heading, icon, color, value, onChange }) {

    const [open, setOpen]=useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={ open ? null : {flexGrow:0}}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreen
        fontSize="small"
        style={{alignSelf:'center'}}
        onClick={() => setOpen(prevState => !prevState)}
        />
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "materials",
          lineNumbers: true,
        }}
      />
    </Container>
  );
}

export default Editor;
