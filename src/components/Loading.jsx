import { Spinner } from '@nextui-org/react';

const Loading = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Spinner
        label="Buscando clima ..."
        color="warning"
        labelColor="warning"
      />
    </div>
  );
};

export default Loading;
