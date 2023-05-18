const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/material");

const VerticalCenterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default VerticalCenterBox;
