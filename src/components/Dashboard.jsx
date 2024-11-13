import { Card, Title, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import TokenOverview from './TokenOverview';
import TradeHistory from './TradeHistory';
import Settings from './Settings';

function Dashboard() {
  return (
    <main className="p-6 sm:p-10">
      <Title className="text-gray-800 dark:text-gray-100">Market Maker Dashboard</Title>
      
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Trade History</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-6">
              <TokenOverview />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <TradeHistory />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Settings />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}

export default Dashboard;