import React, { useEffect, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FlexBetweenBox from "../CustomBoxs/FlexBetweenBox";

import { formatPercentage } from "../../utils/rollOdd";

const TableSimulation = ({ show, data, totalGames }) => {
  const { gamesSimulation } = data;
  const report = useMemo(() => {
    if (!gamesSimulation) return {};
    const lessTwoCopys = Object.keys(gamesSimulation).reduce((acc, key) => {
      if (key < 3) {
        return (acc += gamesSimulation[key]);
      }
      return (acc += 0);
    }, 0);
    const moreTreeCopys = totalGames - lessTwoCopys;
    const moreNineCopys = Object.keys(gamesSimulation).reduce((acc, key) => {
      if (key >= 9) {
        return (acc += gamesSimulation[key]);
      }
      return (acc += 0);
    }, 0);
    return {
      2: formatPercentage(lessTwoCopys / totalGames),
      3: formatPercentage(moreTreeCopys / totalGames),
      9: formatPercentage(moreNineCopys / totalGames),
    };
  }, [gamesSimulation, totalGames]);

  if (!show) return <></>;

  return (
    <FlexBetweenBox gap="3rem">
      <TableContainer
        sx={{
          border: "1px solid black",
          width: "200px",
        }}
      >
        <Table size="small" aria-label="games simulation">
          <TableHead>
            <TableRow>
              <TableCell align="center">Copys</TableCell>
              <TableCell align="center">Games</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(gamesSimulation).map((copys, idx) => (
              <TableRow
                key={copys}
                sx={{
                  backgroundColor: idx % 2 === 0 ? "antiquewhite" : "white",
                }}
              >
                <TableCell align="center">{copys}</TableCell>
                <TableCell align="center">{gamesSimulation[copys]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer
        sx={{
          border: "1px solid black",
          width: "200px",
          maxHeight: "140px",
          alignSelf: "center",
        }}
      >
        <Table size="small" aria-label="games simulation">
          <TableHead>
            <TableRow>
              <TableCell>Copys</TableCell>
              <TableCell>Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(report).map((key, idx) => (
              <TableRow
                key={idx}
                sx={{
                  backgroundColor: idx % 2 === 0 ? "antiquewhite" : "white",
                }}
              >
                <TableCell align="center">
                  {1 * key === 2
                    ? "Less " + key
                    : 1 * key === 3
                    ? key
                    : "More " + key}
                </TableCell>
                <TableCell align="center">{report[key]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </FlexBetweenBox>
  );
};

export default TableSimulation;
