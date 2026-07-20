"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutModel = exports.LeaderboardModel = exports.ActivityModel = exports.TeamModel = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    grade: { type: String, required: true },
    fitnessLevel: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const teamSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    school: { type: String, required: true },
    sport: { type: String, required: true },
    members: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});
const activitySchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    minutes: { type: Number, required: true },
    points: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});
const leaderboardSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
});
const workoutSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: Number, required: true },
    difficulty: { type: String, required: true },
    equipment: { type: [String], default: [] },
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
exports.TeamModel = (0, mongoose_1.model)('Team', teamSchema);
exports.ActivityModel = (0, mongoose_1.model)('Activity', activitySchema);
exports.LeaderboardModel = (0, mongoose_1.model)('LeaderboardEntry', leaderboardSchema);
exports.WorkoutModel = (0, mongoose_1.model)('Workout', workoutSchema);
