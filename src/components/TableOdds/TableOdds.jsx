import React, { useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FlexBetweenBox from "../CustomBoxs/FlexBetweenBox";

const TableOdds = ({ show, data }) => {
  const { odds } = data;
  console.log("🚀 ~ file: TableOdds.jsx:12 ~ TableOdds ~ odds:", odds);
  const table = useMemo(() => {
    if (!odds) return [];
    let tempArr = [];
    for (let i = 1; i <= 10; i++) {
      let element1 = odds[`roll_${i}`];
      let element2 = odds[`roll_${i + 10}`];
      tempArr.push([element1, element2]);
    }
    console.log("🚀 ~ file: TableOdds.jsx:17 ~ table ~ tempArr:", tempArr);
    return tempArr;
  }, [odds]);

  if (!show) return <></>;

  return (
    <FlexBetweenBox gap="3rem">
      <TableContainer
        sx={{
          border: "1px solid black",
          width: "400px",
        }}
      >
        <Table size="small" aria-label="table odds">
          <TableHead>
            <TableRow>
              <TableCell align="center">Roll</TableCell>
              <TableCell align="center">Chance</TableCell>
              <TableCell align="center">Roll</TableCell>
              <TableCell align="center">Chance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{
                  backgroundColor: idx % 2 === 0 ? "antiquewhite" : "white",
                }}
              >
                <TableCell align="center">{idx + 1}</TableCell>
                <TableCell align="center">{row[0]}</TableCell>
                <TableCell align="center">{idx + 10}</TableCell>
                <TableCell align="center">{row[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </FlexBetweenBox>
  );
};

export default TableOdds;
