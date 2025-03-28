import { MantineProvider } from '@mantine/core';
import Demo from './demo';
import Navbar from './navbar';
import MantineHooks from './mantineHooks';

function App() {
  return (
    <MantineProvider
      theme={{
        colors: {
          blue: [
            "#e7f1ff", // 0
            "#b3d7ff", // 1
            "#80b3ff", // 2
            "#4da6ff", // 3
            "#1a94ff", // 4
            "#007bff", // 5
            "#0066cc", // 6
            "#005bb5", // 7
            "#004a99", // 8
            "#003366", // 9
          ],
        },
        primaryColor: 'blue', // Add this line
      }}
    >
     <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'start',  height: '100vh' , paddingTop: '20px', paddingRight: '20px'}}>
     <Demo />
     <Navbar />
     <MantineHooks />
     </div>
    </MantineProvider>
  );
}

export default App;