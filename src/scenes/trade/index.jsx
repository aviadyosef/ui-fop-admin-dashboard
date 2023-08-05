import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import MyList from "../../components/MyList";
import React, { useState, useEffect }  from 'react';
// continues below (1)

const Trade = () => {
  const theme = useTheme();


  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" , width: 50 },
    {
      field: "entryDate",
      headerName: "Entry Date",
      type: "date",
      cellClassName: "name-column--cell",
    },
    {
      field: "brokerType",
      headerName: "Broker Type",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "brokerName",
      headerName: "Broker Name",
    },
    {
      field: "retailUserId",
      headerName: "Retail User Id",
    },
    {
      field: "side",
      headerName: "Side",
    },
    {
      field: "quantity",
      headerName: "Qty",
      type: "number",
    },
      {
          field: "multiplier",
          headerName: "Multiplier",
          type: "number",
      },
      {
          field: "entryPrice",
          headerName: "Entry Price",
          type: "number",
      },
      {
          field: "dayToExpiration",
          headerName: "Day To Expiration",
          type: "number",
      },
      {
          field: "position",
          headerName: "Position",
          type: "number",
      },
      {
          field: "premium",
          headerName: "Premium",
          type: "number",
      },
      {
          field: "commission",
          headerName: "Commission",
          type: "number",
      },
      {
          field: "pAndLTrade",
          headerName: "P And L Trade",
          type: "number",
      },
      {
          field: "pAndLTotal",
          headerName: "P And L Total",
          type: "number",
      },
      {
          field: "historicalPrice.id",
          headerName: "Historical Price",
          type: "singleSelect",
      },
      {
          field: "option.id",
          headerName: "Option",
          type: "number",
      }
  ];


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [trades, setTrade] = useState([]);
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users/")
        fetch("http://localhost:8080/api/trades?page=0&size=20")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setTrade(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
    <Box m="20px">
      <Header title="Trade" subtitle="Managing the Trades" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={trades} columns={columns} />
      </Box>
      <Box>
          <MyList>

          </MyList>
          < ul >

          < /ul >
      </Box>
    </Box>
  );

    }

}

export default Trade;
