import { useState, useEffect } from "react";

const User = ({ firstName, lastName, Link }) => {
  const [counter, setCount] = useState(0);
  const [islogin, setIslogin] = useState(true);
  const [age, setAge] = useState(21);

  const onIncrement = () => {
    setCount(counter + 1);
  };
  const onDecrement = () => {
    setCount(counter - 1);
  };
  const Onrestart = () => {
    setCount(0);
  };
  const onToggleLogin = () => {
    setIslogin((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("effect");
    document.title = `Counter: ${counter}`;
    return () => console.log("deleted");
  }, []);

  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h1>
          mening ismim - {firstName}, sharifim -{lastName}
        </h1>
        <a href={Link}>Youtube Kanalim</a>
        <p className="text-center">{counter}</p>

        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIncrement}>
            +
          </button>
          <button className="btn btn-danger mx-2" onClick={onDecrement}>
            -
          </button>
          <button className="btn btn-dark" onClick={Onrestart}>
            0
          </button>
        </div>
        {islogin ? <p className="text-center mt-3">Login</p> : null}
        <div className="d-flex justify-content-center">
          <button onClick={onToggleLogin} className="btn btn-outline-primary">
            Toggle
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <User firstName="Samar" lastName="Badriddinov" Link="youtube.com" />
      <User firstName="Omar" lastName="hikmatov" Link="youtube.com" />
    </>
  );
};
export default App;
