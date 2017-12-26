var db=require('../../dbConnection');
var User={
 
getAllUsers:function(callback){
 
return db.query("Select * from user",callback);
 
},
 getUserById:function(id,callback){
 
return db.query("select * from user where user_id=?",[id],callback);
 },
 addUser:function(User,callback){
 return db.query("insert into user (name,email,username,password,contactNo) values(?,?,?,?,?)",[User.name,User.email,User.username,User.password,User.contactNo],callback);
 },
 deleteUser:function(id,callback){
  return db.query("delete from user where user_id=?",[id],callback);
 },
 updateUser:function(id,User,callback){
  return db.query("update user set username=?,password=?,contactNo=? where user_id=?",[User.username,User.password,User.contactNo,id],callback);
 }
 
};
 module.exports=User;