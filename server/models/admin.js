var db =require('../../dbConnection');
var Admin={
 
getAllAdmins:function(callback){
 
return db.query("Select * from admin",callback);
 
},
getAdminById:function(id,callback){
    
   return db.query("select * from admin where id=?",[id],callback);
    },
};
 module.exports=Admin;