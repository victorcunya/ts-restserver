"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.users = void 0;
const user_1 = require("./user");
Object.defineProperty(exports, "users", { enumerable: true, get: function () { return user_1.users; } });
function initModels(sequelize) {
    const users = user_1.users.initModel(sequelize);
    return {
        users: users,
    };
}
exports.initModels = initModels;
//# sourceMappingURL=init-models.js.map