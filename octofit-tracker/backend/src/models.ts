import mongoose, { Schema, model, Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  grade: string;
  fitnessLevel: string;
  createdAt: Date;
}

export interface ITeam {
  name: string;
  school: string;
  sport: string;
  members: number;
  createdAt: Date;
}

export interface IActivity {
  userId: mongoose.Types.ObjectId;
  type: string;
  minutes: number;
  points: number;
  date: Date;
}

export interface ILeaderboardEntry {
  userId: mongoose.Types.ObjectId;
  points: number;
  rank: number;
}

export interface IWorkout {
  title: string;
  category: string;
  duration: number;
  difficulty: string;
  equipment: string[];
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  grade: { type: String, required: true },
  fitnessLevel: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  school: { type: String, required: true },
  sport: { type: String, required: true },
  members: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const activitySchema = new Schema<IActivity>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  minutes: { type: Number, required: true },
  points: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true },
});

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  duration: { type: Number, required: true },
  difficulty: { type: String, required: true },
  equipment: { type: [String], default: [] },
});

export const UserModel: Model<IUser> = model<IUser>('User', userSchema);
export const TeamModel: Model<ITeam> = model<ITeam>('Team', teamSchema);
export const ActivityModel: Model<IActivity> = model<IActivity>('Activity', activitySchema);
export const LeaderboardModel: Model<ILeaderboardEntry> = model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);
export const WorkoutModel: Model<IWorkout> = model<IWorkout>('Workout', workoutSchema);
