import { Mongo } from 'meteor/mongo';

export const Signals = new Mongo.Collection('signals');
export const AttackSignals = new Mongo.Collection('attackSignals');

if(Meteor.isServer){
//    Meteor.publish('signals',function(){
////        return Signals.find({},{sort:{date:-1}},{limit:1});
////        return Signals.find({});
////            return Signals.find({}).sort({'date':-1}).limit(1); //failed
////        return Signals.findOne({},{_id:0,signals:1});
////        return Signals.find(
////            {},
////            {
////              _id:0,
////              signals:1,
////            },
////            {
////                sort:
////                    {_id:-1}
////            },
////            {limit:1},
////        );
//    });
//
    Meteor.publish('signals',function(){
        ReactiveAggregate(this,Signals,
              // Pipeline
              [
                // Stage 1
                {
                  $sort: {
                    date:-1
                  }
                },

//                 Stage 2
                {
                  $limit: 1
                }

              ],{clientCollection:'signals'}
        );
    });

    Meteor.publish('attackSignals',function(){
        ReactiveAggregate(this,AttackSignals,
            // Pipeline
            [
                // Stage 1
                {
                    $sort: {
                        date:-1
                    }
                },

//                 Stage 2
                {
                    $limit: 1
                }

            ],{clientCollection:'attackSignals'}
        );
    });

    Meteor.methods({
        insertSignal:function(data){
            console.log(data);
            return Signals.insert(data);
        },
        insertAttackSignals:function(data){
            return AttackSignals.insert(data);
        }
    });


};