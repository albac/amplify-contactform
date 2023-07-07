

const AWS = require('aws-sdk')
const ses = new AWS.SES

const verified_email = process.env.VERIFIED_EMAIL

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(`EMAIL: ${process.env.VERIFIED_EMAIL}`)
  for (const record of event.Records) {

    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    if (record.eventName === 'INSERT'){

      const contactName = record.dynamodb.NewImage.Name.S
      const contactEmail = record.dynamodb.NewImage.Email.S
      const contactMessage = record.dynamodb.NewImage.Message.S
      const contactSubject = record.dynamodb.NewImage.Subject.S

      const bodyData = '<br/><b>Contact Name</b>: ' + contactName +
        '<br/><b>Contact Email</b>: ' + contactEmail +
        '<br/><b>Message</b>: ' + contactMessage

      console.log('Verified email is: ', verified_email) 
      console.log('Contact Name is: ', contactName)

      await ses.sendEmail({
        Destination: {
          ToAddresses: [verified_email],
        },
        Source: verified_email,
        Message: {
          Subject: { Data: contactSubject },
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: bodyData
            },
          },
        },
      }).promise()

    }

    return { status: 'email sent'}

  }
  return Promise.resolve('Successfully processed DynamoDB record');
};
