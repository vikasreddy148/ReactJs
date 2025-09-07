import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    
    <div>
      <h1>Opps some thing went wrong</h1>
      <h1 style={{color:"red"}}>{error.data}</h1>
      <h1>Please Try Again Later</h1>
    </div>
  );
};

export default Error;
