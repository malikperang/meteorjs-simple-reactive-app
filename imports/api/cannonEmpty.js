import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const EmptyCannons = new Mongo.Collection('emptyCannons');

if(Meteor.isServer){

    Meteor.publish('emptyCannons',function(){
        return EmptyCannons.find();
    });

    Meteor.methods({
        insert:function(data){
            return EmptyCannons.insert(data);
        }

    })


};