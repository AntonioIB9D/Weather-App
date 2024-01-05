import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import useClima from '../hooks/useClima';
const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;

  console.log(main);

  //Grados Kelvin
  const kelvin = 273.15;

  return (
    <Card>
      <CardHeader className="font-bold flex justify-center">
        Resultado
      </CardHeader>
      <Divider />
      <CardBody className="flex justify-center flex-wrap">
        <div className="flex gap-3">
          <p className="border-4 border-sky-400/100 p-3 bg-sky-200">
            <b>Ciudad:</b> {name}
          </p>
          <p className="border-4 border-sky-400/100 p-3">
            <b>T. Actual:</b> {parseInt(main.temp - kelvin)}
            <span>&#x2103;</span>
          </p>
          <p className="border-4 border-sky-400/100 p-3 bg-sky-200">
            <b>T. minima:</b> {parseInt(main.temp_min - kelvin)}
            <span>&#x2103;</span>
          </p>
          <p className="border-4 border-sky-400/100 p-3">
            <b>T. máxima:</b> {parseInt(main.temp_max - kelvin)}
            <span>&#x2103;</span>
          </p>
          <p className="border-4 border-sky-400/100 p-3 bg-sky-200">
            <b>S. Térmica:</b> {parseInt(main.feels_like - kelvin)}
            <span>&#x2103;</span>
          </p>
          <p className="border-4 border-sky-400/100 p-3">
            <b>Humedad:</b> {parseInt(main.humidity)}
            <span>%</span>
          </p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <small>
          Resultado del clima por <b>openweathermap.org</b>{' '}
        </small>
      </CardFooter>
    </Card>
  );
};

export default Resultado;
