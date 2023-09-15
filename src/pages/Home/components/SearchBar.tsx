import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  backgroundColor: "#fff",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)",
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
  color: "#060c0c69",
  opacity: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "16px",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const SearchBar = ({
  marginLeft,
  width,
}: {
  marginLeft?: string | number;
  width?: any;
}) => {
  return (
    <div
      style={{
        marginTop: "20px",
        width: width ?? "90%",
        marginLeft: marginLeft ?? "calc(100vw - 95%)",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#98aeaf69" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{ paddingTop: "4px" }}
        />
      </Search>
    </div>
  );
};

export default SearchBar;
