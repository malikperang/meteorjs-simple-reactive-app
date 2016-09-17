import { Mongo } from 'meteor/mongo';

export const Connections = new Mongo.Collection('connections');

if(Meteor.isServer){
    Meteor.publish('connections',function(){
        return Connections.find({

        });
    });

    Meteor.methods({
        insert:function(){

            var checkEx = Connections.findOne({
                clientIP:{"$exists":true}
            });

            clientIP = this.connection.clientAddress;
            data = {
                clientIP:clientIP
            }

            if(checkEx){
               return false;
            }else{
                 return Connections.insert(data);
            }

        }
    });


};