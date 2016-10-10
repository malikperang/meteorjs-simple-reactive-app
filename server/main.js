import {Meteor} from 'meteor/meteor';
import {Connections} from '../imports/api/connections';
import {Signals} from '../imports/api/signals';

if(Meteor.isServer){
    Meteor.startup(()=>{
        Signals.remove({});

        var today = new Date();
        var data = {
            signals:3,
            date:today
        }
        Signals.insert(data)
    });
}
