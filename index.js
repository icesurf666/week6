import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import m from 'mongoose';
import crypto from 'crypto';
import http from 'http';
import CORS from './cors.js';
import UserModel from './models/User.js';
import root from './app.js';

const User = UserModel(m);
const app = root(express, bodyParser, fs, crypto, http, CORS, User, m);
const PORT = process.env.PORT || 443;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));


