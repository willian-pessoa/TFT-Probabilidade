import { useState } from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import FlexCenterBox from "./components/CustomBoxs/FlexCenterBox.jsx"
import VerticalCenterBox from "./components/CustomBoxs/VerticalCenterBox.jsx"
import FlexBetweenBox from './components/CustomBoxs/FlexBetweenBox.jsx';
import CustomRadio from './components/CustomRadio/CustomRadio';
import CustomNumber from './components/CustomNumber/CustomNumber.jsx';

const DEFAULT_COST = { 1: false, 2: false, 3: false, 4: false, 5: false }
const DEFAULT_SHOP = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false }

function App() {
  const theme = useTheme()

  const [cost, setCost] = useState(DEFAULT_COST)
  console.log("🚀 ~ file: App.js:18 ~ App ~ cost:", cost)
  const [hardCost, setHardCost] = useState(null)
  console.log("🚀 ~ file: App.js:19 ~ App ~ hardCost:", hardCost)
  const [shop, setShop] = useState(DEFAULT_SHOP)
  console.log("🚀 ~ file: App.js:22 ~ App ~ shop:", shop)
  const [hardShop, setHardShop] = useState(null)
  console.log("🚀 ~ file: App.js:22 ~ App ~ hardShop:", hardShop)
  const [numberChampOutPool, setNumberChampOutPool] = useState(0)
  const [tierChampOutPool, setTierChampOutPool] = useState(0)
  const [rolls, setRolls] = useState(25)
  const [games, setGames] = useState(500)

  const handleCost = (tier) => {
    setCost({ ...DEFAULT_COST, [tier]: true })
    setHardCost(tier)
  }

  const handleShop = (level) => {
    setShop({ ...DEFAULT_SHOP, [level]: true })
    setHardShop(level)
  }

  const handleChampOutPool = (number) => {
    let formatNumber = parseInt(number, 10)
    if (number === "") {
      setNumberChampOutPool("")
    } else if (formatNumber < 0) {
      setNumberChampOutPool(0)
    } else if (formatNumber > 29) {
      setNumberChampOutPool(29)
    } else {
      setNumberChampOutPool(formatNumber)
    }
  }

  const handleTierChampOutPool = (number) => {
    let formatNumber = parseInt(number, 10)
    if (number === "") {
      setTierChampOutPool("")
    } else if (formatNumber < 0) {
      setTierChampOutPool(0)
    } else if (formatNumber > 13 * 29) {
      setTierChampOutPool(13 * 29)
    } else {
      setTierChampOutPool(formatNumber)
    }
  }

  const handleRolls = (number) => {
    let formatNumber = parseInt(number, 10)
    if (number === "") {
      setRolls("")
    } else if (formatNumber < 0) {
      setRolls(0)
    } else if (formatNumber > 50) {
      setRolls(50)
    } else {
      setRolls(formatNumber)
    }
  }

  const handleGames = (number) => {
    let formatNumber = parseInt(number, 10)
    if (number === "") {
      setGames("")
    } else if (formatNumber < 0) {
      setGames(0)
    } else if (formatNumber > 1000) {
      setGames(1000)
    } else {
      setGames(formatNumber)
    }
  }

  return (
    <VerticalCenterBox width="100vw" minHeight="100vh">
      <CssBaseline />
      {/* {FORM} */}
      <VerticalCenterBox id="FORM" minWidth="700px" minHeight="50%" gap="3rem">
        {/* {TOP SIDE} */}
        <VerticalCenterBox id="TOP_CONTAINER" width="100%" gap="1rem">
          <Typography variant="caption">DESIRED CHAMPION TIER</Typography>
          <FlexBetweenBox id="COST_BOX" width="80%" marginBottom="1rem" >
            {Object.keys(cost).map((tier) => {
              return <CustomRadio onClick={() => handleCost(tier)} key={tier} value={tier} active={cost[tier]} />
            })}
          </FlexBetweenBox>
          <Typography variant="caption">SHOP LEVEL</Typography>
          <FlexBetweenBox id="LEVEL_BOX" width="80%" >
            {Object.keys(shop).map((level) => {
              return <CustomRadio onClick={() => handleShop(level)} key={level} value={level} active={shop[level]} />
            })}
          </FlexBetweenBox>
        </VerticalCenterBox>
        {/* {BOTTOM SIDE} */}
        <VerticalCenterBox id="BOTTOM_CONTAINTER" width="100%" gap="1rem">
          <FlexBetweenBox width="80%">
            <FlexBetweenBox id="COPIAS_FORA" gap="1rem" >
              <Typography variant="caption" align='center' sx={{ margin: "auto 0" }}>DESIRE CHAMP <br /> COPYS OUT POOL</Typography>
              <CustomNumber onClick={() => setNumberChampOutPool("")} value={numberChampOutPool} onChange={(e) => handleChampOutPool(e.target.value)} />
            </FlexBetweenBox>
            <FlexBetweenBox id="MESMO_CUSTO_FORA" gap="1rem">
              <Typography variant="caption" align='center' sx={{ margin: "auto 0" }}>DESIRE TIER <br /> COPYS OUT POOL</Typography>
              <CustomNumber onClick={() => setTierChampOutPool("")} value={tierChampOutPool} onChange={(e) => handleTierChampOutPool(e.target.value)} />
            </FlexBetweenBox>
          </FlexBetweenBox>
          <FlexBetweenBox width="80%">
            <FlexBetweenBox id="NUMBER_OF_ROLLS" gap="1rem" >
              <Typography variant="caption" align='center' sx={{ margin: "auto 0" }}>NUMBER OF ROLLS</Typography>
              <CustomNumber onClick={() => setRolls("")} value={rolls} onChange={(e) => handleRolls(e.target.value)} />
            </FlexBetweenBox>
            <FlexBetweenBox id="AMOUNT_OF_GAMES" gap="1rem">
              <Typography variant="caption" align='center' sx={{ margin: "auto 0" }}>AMOUNT OF GAMES <br /> TO SIMULATE</Typography>
              <CustomNumber onClick={() => setGames("")} value={games} onChange={(e) => handleGames(e.target.value)} />
            </FlexBetweenBox>
          </FlexBetweenBox>
        </VerticalCenterBox>
      </VerticalCenterBox>
    </VerticalCenterBox >
  );
}

export default App;
