require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getGameDataMetacritic = require('./getGameDataMetacritic');
const getGameDataRawg = require('./api/rawg');

