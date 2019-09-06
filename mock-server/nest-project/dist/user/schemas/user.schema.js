"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    fullName: String,
    password: String,
    role: Number
});
//# sourceMappingURL=user.schema.js.map