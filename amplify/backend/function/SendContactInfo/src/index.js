

const AWS = require('aws-sdk')
const ses = new AWS.SES


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(`EMAIL: ${process.env.VERIFIED_EMAIL}`)
  for (const record of event.Records) {

    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    if (record.eventName === 'INSERT'){

      const contactName = record.dynamodb.NewImage.Name.S

      console.log('Contact Name is: ', contactName)

    }



  }
  return Promise.resolve('Successfully processed DynamoDB record');
};
