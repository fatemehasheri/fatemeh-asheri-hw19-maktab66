import * as React  from 'react';
import Header from './Header'
import AbilitySection from './AbilitySection'
import EditForm from './EditForm'
import {useState} from 'react'
import {Container, Grid, Box} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
function App() {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => setEdit(true)

  return (
    <div className="App">
      <Header />
      <Container>
      <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <TabPanel value="1">
                <AbilitySection title="Web Design" handleClick={handleClick}/>
                <AbilitySection title="Front-End" handleClick={handleClick}/>
                <AbilitySection title="Back-End" handleClick={handleClick}/>
            </TabPanel>
            <TabPanel value="2">
                <AbilitySection title="Web Design" handleClick={handleClick}/>
            </TabPanel>
            <TabPanel value="3">
                <AbilitySection title="Front-End" handleClick={handleClick}/>
            </TabPanel>
            <TabPanel value="4">
                <AbilitySection title="Back-End" handleClick={handleClick}/>
            </TabPanel>
            </TabContext>
        </Box>
        </Grid>
        <Grid item xs={4}>
          <EditForm edit={edit}/>
        </Grid>
      </Grid></Container>
      <Container xs={12}>
      <footer className='flex'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="All" value="1" />
                <Tab label="Web Design" value="2" />
                <Tab label="Front-End" value="3" />
                <Tab label="Back-End" value="4" />
            </TabList>
            </Box>
        </TabContext>
        </Box>
      </footer>
      </Container>
    </div>
  );
}

export default App;
