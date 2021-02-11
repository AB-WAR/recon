import React, {useState} from "react";
import GridTable from "@nadavshaar/react-grid-table";
import "./styles.css";
import {rowSet} from './getCoinData';
import getColumns from "./getColumns";
import {SetBinanceTokenRows} from "./BinanceTokenList";

SetBinanceTokenRows();

function App() {
    const columns = getColumns(rowSet);
    let [rows,setRows] = useState([]);
    let [totalRows, setTotalRows] = useState();

    rows = rowSet;

    return (
        <div className="App">
            <GridTable
                columns={columns}
                rows={rows}
                onRowsChange={setRows}
                totalRows={totalRows}
                onTotalRowsChange={setTotalRows}
                isHeaderSticky={true}
                isPaginated={true}
                pageSizes={[25,50,100,150,200,250,300]}
            />
        </div>
    );
}

export default App;
