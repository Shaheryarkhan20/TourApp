var db=require('../../dbConnection');
var Reservation={
 
getAllReservations:function(callback){
 
return db.query("Select * from reservation",callback);
 
},
 getReservationById:function(id,callback){
 
return db.query("select * from reservation where id=?",[id],callback);
 },
 addReservation:function(Reservation,callback){
 return db.query("Insert into reservation (name,email,noOfTickets,packageName,packageType,departureDate,arrivalDate,vehicleType,hotelType,contactNo,address) values(?,?,?,?,?,?,?,?,?,?,?)",[Reservation.name,Reservation.email,Reservation.noOfTickets,Reservation.packageName,Reservation.packageType,Reservation.departureDate,Reservation.arrivalDate,Reservation.vehicleType,Reservation.hotelType,Reservation.contactNo,Reservation.address],callback);
 },
 deleteReservation:function(id,callback){
  return db.query("delete from reservation where Id=?",[id],callback);
 },
 updateReservation:function(id,Reservation,callback){
  return db.query("update reservation set noOfTickets=?, packageName=?, packageType=?,departureDate=?, arrivalDate=?,vehicleType=?, hotelType=?, address=?  where Id=?",[Reservation.noOfTickets,Reservation.packageName,Reservation.packageType,Reservation.departureDate,Reservation.arrivalDate,Reservation.vehicleType,Reservation.hotelType,Reservation.address,id],callback);
 }
 
};
 module.exports=Reservation;