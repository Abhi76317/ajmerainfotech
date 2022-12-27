import React from "react";
import Switch from '@mui/material/Switch';

export default function Navbar({ mode, setMode }) {
  return (
    <div>
      <Switch
        onChange={() => {
          if (mode === "dark") {
            setMode("light")
          } else {
            setMode("dark")
          }
        }}
      />
    </div>
  )
}