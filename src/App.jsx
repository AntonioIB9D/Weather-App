import AppClima from './components/AppClima';
import NavbarUI from './components/Navbar';
import { ClimaProvider } from './context/ClimaProvider';
function App() {
  return (
    <ClimaProvider>
      <NavbarUI />
      <AppClima />
    </ClimaProvider>
  );
}

export default App;
