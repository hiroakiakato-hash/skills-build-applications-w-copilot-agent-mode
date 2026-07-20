import { Router } from 'express';
import { getApiBaseUrl } from './config/api';
import {
  ActivityModel,
  LeaderboardModel,
  TeamModel,
  UserModel,
  WorkoutModel,
} from './models';

const router = Router();

router.get('/api/users/', async (_req, res) => {
  const users = await UserModel.find().lean();
  res.json({ baseUrl: getApiBaseUrl(), data: users });
});

router.get('/api/teams/', async (_req, res) => {
  const teams = await TeamModel.find().lean();
  res.json({ baseUrl: getApiBaseUrl(), data: teams });
});

router.get('/api/activities/', async (_req, res) => {
  const activities = await ActivityModel.find().lean();
  res.json({ baseUrl: getApiBaseUrl(), data: activities });
});

router.get('/api/leaderboard/', async (_req, res) => {
  const leaderboard = await LeaderboardModel.find().lean();
  res.json({ baseUrl: getApiBaseUrl(), data: leaderboard });
});

router.get('/api/workouts/', async (_req, res) => {
  const workouts = await WorkoutModel.find().lean();
  res.json({ baseUrl: getApiBaseUrl(), data: workouts });
});

export default router;
