import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, setValue }) =>{
  return(
      <TextField
    type="text"
    placeholder="Search by name"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
  )
}


export default SearchBar;
