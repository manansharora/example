import axios from 'axios';

const getData = async (symbol) => {
	const res = await axios.get(`/stocks/${symbol}`);

	const dataArr = res.data.data;

	console.log(dataArr);

	dataArr.map((data) => ({
    symbol: data.symbol,
    close: data.close,
    high: data.high,
    low: data.low,
    date: new Date(data.date),
    open: data.open,
    volume: data.volume,
  }));

	return dataArr;
}

export default getData;