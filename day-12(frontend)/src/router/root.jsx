import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function BasicTable() {
  const [rows, setRows] = React.useState([]);
  const [title, setTitle] = React.useState("jaguar");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(
    function () {
      (async () => {
        setLoading(true);
        const data = await axios.get(`http://10.0.250.126:7000/${title}`);
        setRows(data.data);
        setLoading(false);
      })();
    },
    [title]
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "24px",
        }}
      >
        <Button variant="contained" onClick={() => setTitle("jaguar")}>
          jaguar
        </Button>
        <Button variant="contained" onClick={() => setTitle("bmw")}>
          bmw
        </Button>
        <Button variant="contained" onClick={() => setTitle("ferrari")}>
          ferrari
        </Button>
      </div>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S No</TableCell>
                <TableCell>Model Name</TableCell>
                <TableCell>Model Make Id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.model_name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.model_name}</TableCell>
                  <TableCell>{row.model_make_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
