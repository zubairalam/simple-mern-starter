import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const connectDb = () => {
  return mongoose.connect("mongodb://bestsales:bestsales@0.0.0.0:27017/bestsales");
};

const models = { User, Message };

export { connectDb };

export default models;