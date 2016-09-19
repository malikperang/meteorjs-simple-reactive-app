import {Meteor} from 'meteor/meteor';
import {Connections} from '../imports/api/connections';
import {Signals} from '../imports/api/signals';

if(Meteor.isServer){
    Meteor.startup(()=>{
    if (Signals.find().count() === 0) {
//            Signals.insert({signals:1});
//            const signals = [{
//                signals:1
//            }];
//
//            connections.forEach((c) => {
//              Signals.insert(c)
//            });
        }
    });
}
