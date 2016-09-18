import { Mongo } from 'meteor/mongo';

export const Connections = new Mongo.Collection('connections');

if(Meteor.isServer){
    Meteor.publish('connections',function(){
        return Connections.find({

        });
    });

    Meteor.methods({
        insert:function(){
            var  clientIP = this.connection.clientAddress;

            var checkEx = Connections.findOne({
                clientIP:clientIP
            });

            data = {
                clientIP:clientIP
            }

            if(checkEx){
               return false;
            }else{
               Connections.insert(data);
               return true;
            }

//            return false;

        }
    });


};