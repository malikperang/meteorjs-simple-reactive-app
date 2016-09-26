// import { Mongo } from 'meteor/mongo';
// import { Meteor } from 'meteor/meteor';
// import { Connections } from './collection.js';
//
// export const TotalConnections = new Mongo.Collection('totalConnections',{idGeneration:'MONGO'});
//
// if(Meteor.isServer){
//
//     Meteor.publish('totalConnections',function(){
//         ReactiveAggregate(this,Connections,
//             // Pipeline
//             [
//                 // Stage 1
//                 {
//                     $group: {
//                         _id :null,
//                         count:{
//                             $sum:1
//                         }
//                     }
//                 }
//
//             ],{clientCollection:'totalConnections'}
//         );
//     });
//
//
// };