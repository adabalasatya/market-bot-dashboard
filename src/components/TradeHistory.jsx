import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge } from "@tremor/react";

function TradeHistory() {
  const trades = [
    { id: 1, type: "BUY", amount: "1000", price: "0.001", timestamp: "2024-03-20 10:30" },
    { id: 2, type: "SELL", amount: "500", price: "0.0012", timestamp: "2024-03-20 11:45" },
  ];

  return (
    <Card>
      <Title>Recent Trades</Title>
      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Time</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>
                <Badge color={trade.type === "BUY" ? "green" : "red"}>
                  {trade.type}
                </Badge>
              </TableCell>
              <TableCell>{trade.amount}</TableCell>
              <TableCell>{trade.price}</TableCell>
              <TableCell>{trade.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default TradeHistory;