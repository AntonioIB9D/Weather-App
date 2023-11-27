import Formulario from './Formulario';
import Resultado from './Resultado';
import Loading from './Loading';
import useClima from '../hooks/useClima';
import { Card, CardBody, Image } from '@nextui-org/react';
import climaI from '/depresion.png';

const AppClima = () => {
  const { resultado, cargando, noresultado } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {cargando ? (
          <Loading />
        ) : resultado?.name ? (
          <Resultado />
        ) : noresultado ? (
          <Card>
            <CardBody className="text-center flex justify-center">
              <div className="flex flex-col justify-center items-center gap-4">
                <div>{noresultado}</div>
                <div>
                  <Image
                    width={70}
                    height={70}
                    alt="No Resultados"
                    src={climaI}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        ) : (
          <Card>
            <CardBody className="text-center">
              El clima se mostrara aquí
            </CardBody>
          </Card>
        )}
      </main>
    </>
  );
};

export default AppClima;
