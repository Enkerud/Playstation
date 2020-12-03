import Routes from './components/routes/Routes';

// I denne oppgaven fant jeg ut at det har blitt gjort endringer i webpack-config slik at bilder ikke fungerte som i vår opplæring.
// Har da brukt bildeadresser/url istedenfor å hente inn og laste opp bilder til wwwroot-mappen. Ble også et problem å få testet
// opplasting av bilder men har lagt med hvordan jeg ville gått frem.
// Har valgt å forklare og kommentere de komponentene som ligner i games mappen.

function App() {
  return (
    <div className="appMain">
    <Routes></Routes>
      </div>
  );
}

export default App;