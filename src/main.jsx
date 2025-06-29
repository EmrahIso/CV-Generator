import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter';
import './index.css';
import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*

CV Generator 

- Header naigacija 
- Forma za unos podataka
- Navigacija za stajling
- Footer info

- Resume preview (edit i submit buttoni)

- Final Resume

Vrste Formi:

  - general information

  - contact information


  - skills
  - education  
  
  - practical experience
  

*/
