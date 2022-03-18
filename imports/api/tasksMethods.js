import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { TasksCollection } from "../db/TasksCollection";

Meteor.methods({
  "tasks.insert"(text) {
    check(text, String);

    if (!Meteor.userId()) {
      throw new Meteor.Error("Not authorized.");
    }

    TasksCollection.insert({
      text,
      createdAt: new Date(),
      userId: Meteor.userId(),
    });
  },

  "tasks.remove"(taskId) {
    check(taskId, String);

    if (!Meteor.userId()) {
      throw new Meteor.Error("Not authorized.");
    }

    const task = TasksCollection.findOne({
      _id: taskId,
      userId: Meteor.userId(),
    });

    if (!task) {
      throw new Meteor.Error("Access denied.");
    }

    TasksCollection.remove(taskId);
  },

  "tasks.setIsChecked"(taskId, isChecked) {
    check(taskId, String);
    check(isChecked, Boolean);

    if (!Meteor.userId()) {
      throw new Meteor.Error("Not authorized.");
    }

    const task = TasksCollection.findOne({
      _id: taskId,
      userId: Meteor.userId(),
    });

    if (!task) {
      throw new Meteor.Error("Access denied.");
    }

    TasksCollection.update(taskId, {
      $set: {
        isChecked,
      },
    });
  },
});
