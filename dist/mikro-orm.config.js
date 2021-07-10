"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microConfig = void 0;
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
exports.microConfig = {
    entities: [Post_1.Post],
    dbName: 'lireddit',
    host: 'database-1.cfuhjvgitkg3.ap-south-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'settlin987',
    debug: !constants_1.__prod__,
    type: 'postgresql',
};
//# sourceMappingURL=mikro-orm.config.js.map