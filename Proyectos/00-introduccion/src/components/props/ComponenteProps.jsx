const Card = (props) => {
    const { title, description, bgColor } = props
  return (
    <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

const ComponenteProps = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <Card title="tarjeta1" description="contenido de tarjeta 1" bgColor="bg-green-200"/>
      <Card title="tarjeta2" description="contenido de tarjeta 2" bgColor="bg-green-300"/>
      <Card title="tarjeta3" description="contenido de tarjeta 3" bgColor="bg-green-400"/>
      <Card title="tarjeta4" description="contenido de tarjeta 4" bgColor="bg-green-500"/>
      <Card title="tarjeta5" description="contenido de tarjeta 5" bgColor="bg-green-600"/>
    </div>
  );
};

export default ComponenteProps;
