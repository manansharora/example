class FSM {
    constructor() {
        this.symbolData = new Map();
    }

    appendData(data) {
        let storedData = this.symbolData.get(data.symbol);
        if (storedData) {
            storedData.push({
                symbol: data.symbol,
                close: data.close,
                high: data.high,
                low: data.low,
                date: Date.parse(data.date),
                open: data.open,
                volume: data.volume,
            })
        } else {
            storedData = [];
            storedData.push({
                symbol: data.symbol,
                close: data.close,
                high: data.high,
                low: data.low,
                date: Date.parse(data.date),
                open: data.open,
                volume: data.volume,
            });
        }

        this.symbolData.set(data.symbol, storedData);
    }
}

const fsm = new FSM();

module.exports = fsm;
