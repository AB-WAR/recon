import TokenNameCell from "./TokenNameCell";
import PriceCells from "./PriceCells";

const getColumns = ( ) => {
    return [
        {
            id: '1',
            field: 'tokenName',
            label: 'Name',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            cellRenderer: TokenNameCell,
            editorCellRenderer: props => <TokenNameCell {...props} isEdit />
        },
        {
            id: '2',
            field: 'tokenSymbol',
            label: 'Ticker',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '3',
            field: 'marketCap',
            label: 'Market Cap($Mil)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '4',
            field: 'currentPrice',
            label: 'Current Price($)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '5',
            field: 'low_24h',
            label: '24H Low($)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '6',
            field: 'high_24h',
            label: '24H High($)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '7',
            field: 'priceChangePercentage7d',
            label: 'Change 7d(%)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            cellRenderer: PriceCells,
            editorCellRenderer: props => <PriceCells {...props} />
        },
        {
            id: '8',
            field: 'priceChangePercentage14d',
            label: 'Change 14d(%)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            cellRenderer: PriceCells,
            editorCellRenderer: props => <PriceCells {...props} />
        },
        {
            id: '9',
            field: 'priceChangePercentage30d',
            label: 'Change 30d(%)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            cellRenderer: PriceCells,
            editorCellRenderer: props => <PriceCells {...props} />
        },
        {
            id: '10',
            field: 'priceChangePercentage60d',
            label: 'Change 60d(%)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            cellRenderer: PriceCells,
            editorCellRenderer: props => <PriceCells {...props} />
        },
        {
            id: '11',
            field: 'priceChangePercentage200d',
            label: 'Change 200d(%)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            cellRenderer: PriceCells,
            editorCellRenderer: props => <PriceCells {...props} />
        },
        {
            id: '12',
            field: 'priceChangePercentage1y',
            label: 'Change 1Y(%)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
            cellRenderer: PriceCells,
            editorCellRenderer: props => <PriceCells {...props} />
        },
        {
            id: '17',
            field: 'atl',
            label: 'ATL',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '18',
            field: 'atlDate',
            label: 'ATL Date',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '19',
            field: 'ath',
            label: 'ATH',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '20',
            field: 'athDate',
            label: 'ATH Date',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '21',
            field: 'circulatingSupply',
            label: 'Circulation(Mil)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '22',
            field: 'maxSupply',
            label: 'Max Supply(Mil)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
        {
            id: '23',
            field: 'totalSupply',
            label: 'Total Supply(Mil)',
            visible: true,
            searchable: true,
            editable: true,
            sortable: true,
            resizable: true,
        },
    ]
}

export default getColumns;