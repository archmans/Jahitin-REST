const soapRequest = require('easy-soap-request');
const xmlgetsubs =
`
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
                        xmlns:ser="http://service.jahitin.com/">
        <soapenv:Header/>
        <soapenv:Body>
            <ser:getAllPendingRequest/>
        </soapenv:Body>
    </soapenv:Envelope>
`
const parseString = require('xml2js')

const getAllSubscriptionController = async (req, res) => {
    try{
        console.log('Get All Subscription Controller');
        const soap = require('soap');
        const url = 'http://localhost:8003/ws/subscription?wsdl';
        const headers = {
            'Content-Type': 'text/xml;charset=UTF-8',
            'x-api-key': 'RestClient'
        };
        const { response } = await soapRequest({ url: url, headers: headers, xml: xmlgetsubs});
        console.log(response.body);
        const { body, statusCode } = response;
        console.log(body);
        console.log(statusCode);
        // response = <?xml version='1.0' encoding='UTF-8'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns2:getAllPendingRequestResponse xmlns:ns2="http://service.jahitin.com/"><return><user_id>1</user_id><status>PENDING</status></return><return><user_id>4</user_id><status>PENDING</status></return></ns2:getAllPendingRequestResponse></S:Body></S:Envelope>
        parseString.parseString(body, (err, result) => {
            if (err) {
                throw err;
            }
            // console.log(result);
            console.log(result['S:Envelope']['S:Body'][0]['ns2:getAllPendingRequestResponse'][0]['return']);
            res.status(200).json(result['S:Envelope']['S:Body'][0]['ns2:getAllPendingRequestResponse'][0]['return']);
        });
    } catch(err) {
            res.status(400).json({message: 'Error while getting list of pending subscriptions: ' + err.message});
    }
};

module.exports = {
    getAllSubscriptionController
};
