"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const codespaceName = process.env.CODESPACE_NAME;
const codespacesUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
console.log(`Configured API URL: ${codespacesUrl}`);
exports.default = index_1.app;
