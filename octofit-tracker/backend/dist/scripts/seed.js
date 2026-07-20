"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            models_1.UserModel.deleteMany({}),
            models_1.TeamModel.deleteMany({}),
            models_1.ActivityModel.deleteMany({}),
            models_1.LeaderboardModel.deleteMany({}),
            models_1.WorkoutModel.deleteMany({}),
        ]);
        const users = await models_1.UserModel.insertMany([
            {
                name: 'Ava Chen',
                email: 'ava@example.com',
                grade: '10th',
                fitnessLevel: 'intermediate',
            },
            {
                name: 'Marcus Reed',
                email: 'marcus@example.com',
                grade: '11th',
                fitnessLevel: 'advanced',
            },
            {
                name: 'Jules Ortiz',
                email: 'jules@example.com',
                grade: '9th',
                fitnessLevel: 'beginner',
            },
        ]);
        await models_1.TeamModel.insertMany([
            {
                name: 'Rocket Squad',
                school: 'Mergington High',
                sport: 'Cross Country',
                members: 6,
            },
            {
                name: 'Storm Striders',
                school: 'Mergington High',
                sport: 'Track',
                members: 5,
            },
        ]);
        const activities = await models_1.ActivityModel.insertMany([
            {
                userId: users[0]._id,
                type: 'run',
                minutes: 25,
                points: 120,
                date: new Date('2026-07-20T07:30:00.000Z'),
            },
            {
                userId: users[1]._id,
                type: 'strength',
                minutes: 35,
                points: 170,
                date: new Date('2026-07-19T18:00:00.000Z'),
            },
            {
                userId: users[2]._id,
                type: 'walk',
                minutes: 20,
                points: 90,
                date: new Date('2026-07-18T06:15:00.000Z'),
            },
        ]);
        await models_1.LeaderboardModel.insertMany([
            {
                userId: users[0]._id,
                points: 1200,
                rank: 1,
            },
            {
                userId: users[1]._id,
                points: 1180,
                rank: 2,
            },
            {
                userId: users[2]._id,
                points: 950,
                rank: 3,
            },
        ]);
        await models_1.WorkoutModel.insertMany([
            {
                title: 'Morning Run',
                category: 'cardio',
                duration: 20,
                difficulty: 'easy',
                equipment: ['running shoes'],
            },
            {
                title: 'Core Power',
                category: 'strength',
                duration: 25,
                difficulty: 'medium',
                equipment: ['mat'],
            },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
