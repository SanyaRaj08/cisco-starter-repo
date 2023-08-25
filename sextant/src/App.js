import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Card from './components/Card';

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Exhibit title="Data Points">
        <Card title="Public IP" value="192.168.1.1" />
        <Card title="Latency" value="25 ms" />
      </Exhibit>
    </div>
  );
};

export default App;


