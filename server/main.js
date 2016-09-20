import {Meteor} from 'meteor/meteor';
import {Connections} from '../imports/api/connections';
import {Signals} from '../imports/api/signals';

if(Meteor.isServer){
    Meteor.startup(()=>{
       Connections.remove({});
       Signals.remove({});
    });
}
