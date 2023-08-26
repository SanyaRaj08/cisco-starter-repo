import React, { useState, useEffect } from 'react';

const IPComponent = ({ ipType }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const apiUrl = ipType === 'ipv6' ? 'https://api64.ipify.org?format=json' : 'https://api.ipify.org?format=json';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.error('Error fetching IP:', error));
  }, [ipType]);

  return (
    <div className="ip-component">
      <p>Your {ipType === 'ipv6' ? 'IPv6' : 'IPv4'} Address: {ipAddress}</p>
    </div>
  );
};

export default IPComponent;
