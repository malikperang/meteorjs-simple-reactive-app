import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Connections } from './connections';


export const TotalConnections = new Mongo.Collection('totalConnections');

if(Meteor.isServer){

    Meteor.publish('totalConnections',function(){
        return Counts.publish(this, 'totalDevice', Connections.find(),{
            noReady:true
        });
        // ReactiveAggregate(this,Connections,
        //     // Pipeline
        //     [
        //         // Stage 1
        //         {
        //             $group: {
        //                 _id :null,
        //                 count:{
        //                     $sum:1
        //                 }
        //             }
        //         }
        //
        //     ],{clientCollection:'totalConnections'}
        // );
    });


};