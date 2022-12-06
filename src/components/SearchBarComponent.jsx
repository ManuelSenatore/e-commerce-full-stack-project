import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";

/* const Autocomplete = styled("div")(({ theme }) => ({
  position: "sticky",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
})); */

export default function SearchBarComponent() {
  const prodottoList = useSelector((state) => state.prodotto.prodottoList);
  const navigate = useNavigate();

  const maker = () => {
    let arr = [];

    prodottoList.forEach((e) => {
      let obj = {
        id: e.id,
        code: e.immagineUrl,
        label: e.nome,
        phone: e.prezzo,
      };
      arr.push(obj);
    });
    return arr;
  };
  return (
    <div className="searchBar">
      <Autocomplete
        id="searchProdotto"
        sx={{ width: 300 }}
        options={maker()}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <div onClick={() => navigate("/dettagli" + option.id)}>
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img loading="lazy" width="40" src={option.code} alt="" />
              {option.label}
            </Box>
          </div>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Cerca..."
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}
