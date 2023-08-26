import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPComponent from './components/IPComponent';

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Exhibit title="IP Addresses">
        <IPComponent ipType="ipv4" />
        <IPComponent ipType="ipv6" />
      </Exhibit>
    </div>
  );
};

export default App;



