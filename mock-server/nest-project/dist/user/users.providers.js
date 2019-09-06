"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./schemas/user.schema");
exports.usersProviders = [
    {
        provide: 'USERS_MODEL',
        useFactory: (connection) => connection.model('User', user_schema_1.UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=users.providers.js.map