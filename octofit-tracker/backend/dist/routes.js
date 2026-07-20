"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("./config/api");
const models_1 = require("./models");
const router = (0, express_1.Router)();
router.get('/api/users/', async (_req, res) => {
    const users = await models_1.UserModel.find().lean();
    res.json({ baseUrl: (0, api_1.getApiBaseUrl)(), data: users });
});
router.get('/api/teams/', async (_req, res) => {
    const teams = await models_1.TeamModel.find().lean();
    res.json({ baseUrl: (0, api_1.getApiBaseUrl)(), data: teams });
});
router.get('/api/activities/', async (_req, res) => {
    const activities = await models_1.ActivityModel.find().lean();
    res.json({ baseUrl: (0, api_1.getApiBaseUrl)(), data: activities });
});
router.get('/api/leaderboard/', async (_req, res) => {
    const leaderboard = await models_1.LeaderboardModel.find().lean();
    res.json({ baseUrl: (0, api_1.getApiBaseUrl)(), data: leaderboard });
});
router.get('/api/workouts/', async (_req, res) => {
    const workouts = await models_1.WorkoutModel.find().lean();
    res.json({ baseUrl: (0, api_1.getApiBaseUrl)(), data: workouts });
});
exports.default = router;
