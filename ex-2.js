class Notification { 
    constructor (notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(receiver){
        console.log(`Notification has been sent to ${receiver}`);
    }
}

class EmailNotification extends Notification { 
    constructor(notificationId,createdTime,content,receiver){
    super(notificationId,createdTime,content,receiver);
}
}
class SMSNotification extends Notification{
    constructor(notificationId,createdTime,content,receiver){
    super(notificationId,createdTime,content,receiver);
    }
 }
 const boom2k31 = new EmailNotification("AA","17.11PM","Hi","boom2k31@gmail.com");
 boom2k31.send("boom2k31@gmail.com");
 const pocoF3 = new SMSNotification("AA","17.11PM","Hi","0817345655") ;
 pocoF3.send("0817345655");
