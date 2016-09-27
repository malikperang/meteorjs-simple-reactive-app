import {Meteor} from 'meteor/meteor';
import {Connections} from '../imports/api/connections';
import {Signals,AttackSignals} from '../imports/api/signals';

if(Meteor.isServer){
    Meteor.startup(()=>{
        // SSLProxy({
        //         port: 3004, //or 443 (normal port/requires sudo)
        //         ssl : {
        //             key: Assets.getText("server.key"),
        //             cert: Assets.getText("server.crt"),
        //
        //     //Optional CA
        //     //Assets.getText("ca.pem")
        // }
    // });
    // Connections.remove({});
        Signals.remove({});
        AttackSignals.remove({});
    });
}
