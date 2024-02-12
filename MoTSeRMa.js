var TCPServer = require('./tcpServer');
var RTUMaster = require('./rtuMaster');

var PORT = process.env.PORT || '/dev/ttyUSB0'

var rtuMaster = new RTUMaster({
    portName: PORT,
    portSetup:{
        baudrate: 9600
    }}, function(){
    var tcpServer = new TCPServer({
        port:502
    }, function(request, callback){
        rtuMaster.request(request, callback);
    });
});


