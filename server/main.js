import {Meteor} from 'meteor/meteor';
import {Connections} from '../imports/api/connections';

if(Meteor.isServer){
    Meteor.startup(()=>{
    if (Connections.find().count() === 0) {
    //        const connections = [{
    //
    //        }];
    //
    //        connections.forEach((c) => {
    //          Connections.insert(c)
    //        });
        }
    });
}
