import { Card, Title, TextInput, NumberInput, Button, Grid, Col } from "@tremor/react";

function Settings() {
  return (
    <Card>
      <Title>Bot Configuration</Title>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6 mt-6">
        <Col>
          <TextInput
            placeholder="Token Mint Address"
            label="Token Mint"
          />
        </Col>
        <Col>
          <NumberInput
            placeholder="0.01"
            label="Distribution Amount"
          />
        </Col>
        <Col>
          <NumberInput
            placeholder="3"
            label="Distribution Number"
          />
        </Col>
        <Col>
          <NumberInput
            placeholder="0.005"
            label="Additional Fee"
          />
        </Col>
        <Col>
          <NumberInput
            placeholder="0.01"
            label="Buy Amount"
          />
        </Col>
        <Col>
          <NumberInput
            placeholder="4000"
            label="Buy Interval Max"
          />
        </Col>
      </Grid>
      <Button className="mt-6">Save Configuration</Button>
    </Card>
  );
}

export default Settings;