import mongoose from 'mongoose';
import {
  ActivityModel,
  LeaderboardModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      LeaderboardModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    const users = await UserModel.insertMany([
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

    await TeamModel.insertMany([
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

    const activities = await ActivityModel.insertMany([
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

    await LeaderboardModel.insertMany([
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

    await WorkoutModel.insertMany([
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
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
