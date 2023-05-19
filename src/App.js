import { useState } from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import FlexCenterBox from "./components/CustomBoxs/FlexCenterBox.jsx"
import VerticalCenterBox from "./components/CustomBoxs/VerticalCenterBox.jsx"
import FlexBetweenBox from './components/CustomBoxs/FlexBetweenBox.jsx';
import CustomRadio from './components/CustomRadio/CustomRadio';
import CustomNumber from './components/CustomNumber/CustomNumber.jsx';

function App() {
  const theme = useTheme()

  const [cost, setCost] = useState({ 1: false, 2: false, 3: false, 4: true, 5: false })
  const [shop, setShop] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: true, 8: false, 9: false })
  const [numberChampOutPool, setNumberChampOutPool] = useState(0)

  return (
    <VerticalCenterBox width="100vw" minHeight="100vh">
      <CssBaseline />
      {/* {FORM} */}
      <VerticalCenterBox id="FORM" width="90%" minHeight="50%" gap="3rem">
        {/* {TOP SIDE} */}
        <VerticalCenterBox id="TOP_CONTAINER" width="100%" gap="1rem">
          <Typography variant="caption">DESIRED CHAMPION TIER</Typography>
          <FlexBetweenBox id="COST_BOX" width="80%" marginBottom="1rem" >
            {Object.keys(cost).map((tier) => {
              return <CustomRadio key={tier} value={tier} active={cost[tier]} />
            })}
          </FlexBetweenBox>
          <Typography variant="caption">SHOP LEVEL</Typography>
          <FlexBetweenBox id="LEVEL_BOX" width="80%" >
            {Object.keys(shop).map((level) => {
              return <CustomRadio key={level} value={level} active={shop[level]} />
            })}
          </FlexBetweenBox>
        </VerticalCenterBox>
        {/* {BOTTOM SIDE} */}
        <VerticalCenterBox id="BOTTOM_CONTAINTER" width="100%" gap="1rem">
          <FlexBetweenBox width="80%">
            <FlexBetweenBox id="COPIAS_FORA" gap="1rem" >
              <Typography variant="caption">DESIRE CHAMP <br /> COPYS OUT POOL</Typography>
              <CustomNumber max="29" min="0" value={numberChampOutPool} onChange={(e) => setNumberChampOutPool(e.target.value)} />
            </FlexBetweenBox>
            <FlexBetweenBox id="MESMO_CUSTO_FORA" gap="1rem">
              <Typography variant="caption">DESIRE TIER <br /> COPYS OUT POOL</Typography>
              <CustomNumber max="200" min="0" value={numberChampOutPool} onChange={(e) => setNumberChampOutPool(e.target.value)} />
            </FlexBetweenBox>
          </FlexBetweenBox>
        </VerticalCenterBox>
      </VerticalCenterBox>
    </VerticalCenterBox >
  );
}

export default App;
