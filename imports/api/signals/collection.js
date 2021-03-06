import { Mongo } from 'meteor/mongo';

export const Signals = new Mongo.Collection('signals');
// export const AttackSignals = new Mongo.Collection('attackSignals');

if(Meteor.isServer){
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

    Meteor.methods({
        insertSignal:function(data){
            console.log(data);
            return Signals.insert(data);
        },

    });

    Signals.allow({
        insert:function(){
            return true;
        }
    })


};