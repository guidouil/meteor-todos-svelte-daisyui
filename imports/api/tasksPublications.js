import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/db/TasksCollection";

Meteor.publish("tasks", () =>
  TasksCollection.find({ userId: Meteor.userId() })
);
