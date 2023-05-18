import { useState } from 'react';
import { Box, useTheme, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import CustomRadio from './components/CustomRadio/CustomRadio';

function App() {
  const theme = useTheme()

  const [cost, setCost] = useState({ 1: false, 2: false, 3: false, 4: true, 5: false })
  console.log("🚀 ~ file: App.js:7 ~ App ~  theme :", theme)

  return (
    <Box width="100vw">
      <CssBaseline />
      {/* {FORM} */}
      <Box>
        {/* {TOP SIDE} */}
        <Box>
          <Box>
            <CustomRadio value={1}/>
          </Box>
          <Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
