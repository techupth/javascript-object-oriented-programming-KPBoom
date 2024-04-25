class EmailNotification { 
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(email){
        console.log(`Notification has been sent to ${email}`);
    }
}

class SMSNotification {
    constructor(notificationId,createdTime,content,phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(phoneNumber){
        console.log(`Notification has been sent to ${phoneNumber}`);
    }
 }
 const boom2k31 = new EmailNotification("AA","17.11PM","Hi","boom2k31@gmail.com");
 boom2k31.send("boom2k31@gmail.com");
 const pocoF3 = new SMSNotification("AA","17.11PM","Hi","0817345655") ;
 pocoF3.send("0817345655");
