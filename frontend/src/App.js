import React, { useState, useEffect } from "react";
import ChartJS from "./components/Chart";
import getData from "./utils";

const App = () => {
  const [chartsToDisplay, setChartsToDisplay] = useState([]);

  const init = async () => {
    const data = await getData('AAPL');
    const charts = [];
    charts.push(<ChartJS key={1} data={data} />);
    setChartsToDisplay(charts);
  };

  useEffect(() => {
    init();
  }, []);

  return <div className="App">{chartsToDisplay}</div>;
};

export default App;