import { useState } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';
import useClima from '../hooks/useClima';

const Formulario = () => {
  const [alerta, setAlerta] = useState('');
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios *');
      return;
    }
    setAlerta('');
    consultarClima(busqueda);
  };

  return (
    <Card>
      <CardBody>
        {alerta && <p className="alert text-base">{alerta}</p>}
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="ciudad" className="text-base">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              onChange={datosBusqueda}
              value={ciudad}
            />
          </div>
          <div className="campo">
            <label htmlFor="pais">País</label>
            <select id="pais" name="pais" onChange={datosBusqueda} value={pais}>
              <option value="">Seleccione un país</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="ES">España</option>
              <option value="PE">Perú</option>
            </select>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              value="consultar clima"
              color="primary"
              size="md"
            >
              Consultar clima
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default Formulario;
