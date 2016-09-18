import { Mongo } from 'meteor/mongo';

export const Signals = new Mongo.Collection('signals');

if(Meteor.isServer){
    Meteor.publish('signals',function(){
//        return Signals.find({},{sort:{date:-1}},{limit:1});
        return Signals.find({},{sort:{date:-1},limit:1});
//            return Signals.find({}).sort({'date':-1}).limit(1); //failed
//        return Signals.findOne({},{_id:0,signals:1});
//        return Signals.find(
//            {},
//            {
//              _id:0,
//              signals:1,
//            },
//            {
//                sort:
//                    {_id:-1}
//            },
//            {limit:1},
//        );
    });

    Meteor.methods({
        insertSignal:function(data){
            console.log(data);
            return Signals.insert(data);
        }
    });


};