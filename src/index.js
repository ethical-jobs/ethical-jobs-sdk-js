import Client from 'client';
import * as endpoints from 'endpoints';

Object.keys(endpoints).forEach(endpointName => {
  Client.prototype[endpointName] = endpoints[endpointName];
});

export default Client;