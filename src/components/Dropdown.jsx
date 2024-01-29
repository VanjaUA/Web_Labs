import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './Dropdown.css'

const Dropdown = ({ value, onChange, controlId, label, selectItems, required }) => {
    const labelId = controlId + '-label';
    const selectId = controlId + '-select';
  
    return (
      <div className="dropdown">
        <FormControl fullWidth>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select
            value={value}
            onChange={onChange}
            labelId={labelId}
            id={selectId}
            label={label}
          >
            {!required && (
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
            )}
            {selectItems.map((item, i) => (
              <MenuItem key={`${controlId}-${i}`} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
};

export default Dropdown;