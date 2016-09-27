import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Connections = new Mongo.Collection('connections');
export const ExistConnections = new Mongo.Collection('existConnections');
// export const TotalConnections = new Mongo.Collection('totalConnections',{idGeneration:'MONGO'});

if(Meteor.isServer){
    Meteor.publish('connections',function(){
        return Connections.find({});
    });



    Meteor.publish('totalConnections',function(){
        Counts.publish(this, 'totalDevice', Connections.find());

    });

    Meteor.methods({
        getIpAddress:function(){
            return this.connection.clientAddress;
        },

        insert:function(data){
            var  clientIP = this.connection.clientAddress;

            //existing connection
            var exc = Connections.findOne({
                clientIP:clientIP,
            });

            //get latest record;

            var latestRecord = Connections.find({},{sort:{date:-1},limit:1}).fetch().pop();

            if(exc){
                return false;
            }else{
                //if record empty
                if(!latestRecord){
                    data = {
                        clientIP:clientIP,
                        queNum:1,
                        date: new Date()
                    }
                    Connections.insert(data);
                    console.log('no record');
                }

                var min = 0;
                var max = 100;

                if(latestRecord){

                    console.log('has record');
                    console.log('queNum',latestRecord.queNum);
                    for(var i=min;i<max;i++){
                        if(i > latestRecord.queNum){

                            data = {
                                clientIP:clientIP,
                                queNum:i,
                                date: new Date()
                            }

                            Connections.insert(data);
                            break;
                        }
                    }
                }

                return true;
            }


        },
        checkExisting:function(data){
            var  clientIP = this.connection.clientAddress;

            //existing connection
            var exc = Connections.findOne({
                queNum:data.number
            });

            if(exc){
                return true;
            }else{
                return false;
            }

        }
    });


};