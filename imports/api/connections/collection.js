import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Connections = new Mongo.Collection('connections');
export const ExistConnections = new Mongo.Collection('existConnections');
// export const TotalConnections = new Mongo.Collection('totalConnections',{idGeneration:'MONGO'});

if(Meteor.isServer){
    Meteor.publish('connections',function(){
        return Connections.find({});
    });
    // Meteor.publish('existConnections',function(){
    //     var  clientIP = this.connection.clientAddress;
    //     var ex = Connections.findOne();
    //
    // });
    Meteor.publish('totalConnections',function(){
        Counts.publish(this, 'totalDevice', Connections.find());
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

    //
    // Meteor.publish('totalConnections',function(){
    //     ReactiveAggregate(this,Connections,
    //         // Pipeline
    //         [
    //             // Stage 1
    //             {
    //                 $group: {
    //                     _id :null,
    //                     count:{
    //                         $sum:1
    //                     }
    //                 }
    //             }
    //
    //         ],{clientCollection:'totalConnections'}
    //     );
    // });

    Meteor.methods({
        insert:function(data){
            // data.number = 7;
            // console.log(data.number);
            var  clientIP = this.connection.clientAddress;

            //existing connection
            var exc = Connections.findOne({
                clientIP:clientIP,
            });


            var exN = Connections.findOne({
                queNum:data.number
            });

            data = {
                clientIP:clientIP,
                queNum:data.number
            }

            var max = 60;
            var min = 1;
            var number = Math.floor(Math.random() * (max-min) + min);
            // while(exN && number === exN.queNum){
            //     data.queNum = number;
                Connections.insert(data);
            // }
            // if(exN){
            //     console.log('same number');
            //     var newNum = '';
            //     for(i = 0; i < 8; i++){
            //         if(i !== exN.queNum){
            //             newNum = i;
            //             break;
            //         }
            //     }
            //
            // }

            // console.log('new number',newNum);
            // // // console.log(exN.queNum);
            // if(exN) {
            //     console.log('same no', exN.queNum);
            //     // return 'same';
            // }
            // }else{
            //     console.log('x same no',data.number);
            //     return 'x same';
            // }
            // //


            // var k = 0;
            // if(k === 1){
            //     return false;
            // }else{
            //     Connections.insert(data);
            //     return true;
            // }


            // if(exN){
            //     f

                // Connections.insert(data);
            // }else{
            //     Connections.insert(data);
            // }

            // if(exN){
            //     var max = 60;
            //     var min = 1;
            //     // var number = Math.floor(Math.random() * (max-min) + min);
            //     // data.number = number;
            //
            //
            //     Connections.insert(data);
            //
            // }else{
            //     Connections.insert(data);
            // }

            // console.log('number on server',data.queNum);

            // return
            // return true;


            // console.log(data.number);




            //

            //
            // if(data){
            //    return false;
            // }else{
            //    Connections.insert(data);
            //    return true;
            // }

        },
        checkExisting:function(data){
            var  clientIP = this.connection.clientAddress;

            //existing connection
            var exc = Connections.findOne({
                queNum:data.number
            });

            if(exc){
                return true;
            }else{
                return false;
            }

        }
    });


};