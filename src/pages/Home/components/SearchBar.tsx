import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#67748E",
  opacity: 0.3,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "16px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}));

const SearchBar: React.FC = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        width: "90%",
        marginLeft: "calc(100vw - 95%)",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#fff" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </div>
  );
};

export default SearchBar;
