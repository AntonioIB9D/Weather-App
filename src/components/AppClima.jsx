import Formulario from './Formulario';
import Resultado from './Resultado';
import Loading from './Loading';
import useClima from '../hooks/useClima';

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
          <div className="contenedor">{noresultado}</div>
        ) : (
          <div className="contenedor">El clima se mostrara aquí</div>
        )}
      </main>
    </>
  );
};

export default AppClima;
