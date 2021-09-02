'use strict';

module.exports.hello = async (event,context) => {
  const data = event.requestContext;
  var httpVal=data.http;
  var IpAddress=httpVal.sourceIp;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:'Hey Hi,This is your IP Address '+IpAddress+" It's test api",
        sourceIp:IpAddress
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
