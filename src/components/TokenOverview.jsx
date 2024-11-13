import { Card, Title, AreaChart, Metric, Text } from "@tremor/react";

const data = [
  { date: "2024-01", Volume: 2890, Price: 2400 },
  { date: "2024-02", Volume: 2756, Price: 2200 },
  { date: "2024-03", Volume: 3322, Price: 2900 },
];

function TokenOverview() {
  return (
    <Card>
      <Title>Token Performance</Title>
      <Text>24h Volume and Price History</Text>
      <AreaChart
        className="mt-4 h-72"
        data={data}
        categories={["Volume", "Price"]}
        index="date"
        colors={["blue", "red"]}
      />
    </Card>
  );
}

export default TokenOverview;