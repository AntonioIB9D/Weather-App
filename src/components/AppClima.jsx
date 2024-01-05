import Formulario from './Formulario';
import Resultado from './Resultado';
import Loading from './Loading';
import useClima from '../hooks/useClima';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from '@nextui-org/react';
import nublado from '../resource/nublado.png';
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
          <Card className="border-4 border-indigo-200 border-y-indigo-500">
            <CardHeader className="text-center flex justify-center font-bold">
              El clima se mostrara aquí
            </CardHeader>
            <Divider />
            <CardBody className="flex justify-center items-center">
              <img src={nublado} className="h-20 w-20 " />
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-center">
              <small>
                Información del clima por <b>openweathermap.org</b>
              </small>
            </CardFooter>
          </Card>
        )}
      </main>
    </>
  );
};

export default AppClima;
