// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdkinboundendpointpool\",\"startTime\":\"2018-08-21T17:30:00Z\",\"endTime\":\"2018-08-21T18:00:00Z\",\"vmSize\":\"standard_a1\",\"totalCoreHours\":0.49999999997222216,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    },{\r\n      \"poolId\":\"nodesdktestpool1\",\"startTime\":\"2018-08-21T17:30:00Z\",\"endTime\":\"2018-08-21T18:00:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":1.4999999999166673,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd24622e1-96c9-4b99-8f89-cb92bb63bb0b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdkinboundendpointpool\",\"startTime\":\"2018-08-21T17:30:00Z\",\"endTime\":\"2018-08-21T18:00:00Z\",\"vmSize\":\"standard_a1\",\"totalCoreHours\":0.49999999997222216,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    },{\r\n      \"poolId\":\"nodesdktestpool1\",\"startTime\":\"2018-08-21T17:30:00Z\",\"endTime\":\"2018-08-21T18:00:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":1.4999999999166673,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd24622e1-96c9-4b99-8f89-cb92bb63bb0b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:23 GMT',
  connection: 'close' });
 return result; }]];