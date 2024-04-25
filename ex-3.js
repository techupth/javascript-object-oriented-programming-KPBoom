//  Start coding here
class User {
    constructor(id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class PostList{
    constructor(post){
        this.post = [post];
    }
    addPost(post){
        this.post.push(post);
    }
    sharePost(postTitle){
        console.log(`You've shared post ${postTitle} to your friend.`)
    }
}
class Post{
    constructor(id,title,content,comment){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [comment];
    }
    addComment(comment){
        this.comment.push(comment);
    }
}   
class Comment{
    constructor(id,content,createdBy,like){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = like = 0 ; 
    }
    addLike(){
        like++;
    }
}   
class Facebook{
    constructor(groupList,pageList){
        this.groupList = [groupList] = FacebookGroup;
        this.pageList = [pageList] = FacebookPage;
        }
    addGroup(groupList){
        this.groupList.push(groupList);
    }
    addPage(pageList){
        this.pageList.push(pageList);
    }
}
class FacebookPage {
    constructor(name){
        this.name = name;
    }
}
class FacebookGroup{
    constructor(name){
        this.name = name;
    }
}
class Notification{
    constructor(id){
        this.id = id;
    }
    send(createdBy,postTitle){
        console.log(`Notification: ${createdBy} has just commented on this post-${postTitle}`);
    }
}