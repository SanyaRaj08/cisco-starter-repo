import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import AddressDisplay from './components/AddressDisplay';
import LatencyComponent from './components/LatencyComponent';

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Exhibit title="Public IPv4 Address">
        <AddressDisplay url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit title="Public IPv6 Address">
        <AddressDisplay url='https://api64.ipify.org?format=json' />
      </Exhibit>
      <Exhibit title="Pylon Packet Latency">
        <LatencyComponent />
      </Exhibit>
    </div>
  );
};

export default App;





