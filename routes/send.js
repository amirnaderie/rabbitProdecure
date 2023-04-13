const config = require("config");
const express = require("express");
var amqp = require('amqplib/callback_api');
const router = express.Router();


router.get("/", async (req, res) => {
  try {
  
    amqp.connect('amqp://localhost', function(error0, connection) {
      if (error0) {
          throw error0;
      }
      connection.createChannel(function(error1, channel) {
          if (error1) {
              throw error1;
          }
  
          var queue = 'hello';
          var msg = 'Hello World!';
  
          channel.assertQueue(queue, {
              durable: false
          });
          channel.sendToQueue(queue, Buffer.from(msg));
  
          console.log(" [x] Sent %s", msg);
      });
      // setTimeout(function() {
      //     connection.close();
      //     process.exit(0);
      // }, 500);
  });


    res.status(200).send(' ثبت اطلاعات');
    // db.run(`INSERT INTO Menu(Name) VALUES(?)`, [req.body.menuName], function(err) {
  //   if (err) {
  //     res.status(500).send('خطا در ثبت اطلاعات');
  //     return;
  //   }
  //  // get the last insert id
  //   res.status(200).send({newRowId:this.lastID}); 
  // });


} catch (error) {
  
  res.status(error.response.status).send('خطا در ثبت اطلاعات');
 }
});

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
module.exports = router;
