"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(userDto) {
        const u = await this.userModel.findOne({ "name": userDto.name });
        console.log(u);
        if (u) {
            return u.name + "已存在";
        }
        const createdCat = new this.userModel(userDto);
        await createdCat.save();
        return "保存成功";
    }
    async findAll() {
        return await this.userModel.find().exec();
    }
    async findOne(loginDTO) {
        return await this.userModel.findOne({ "name": loginDTO.name, "password": loginDTO.password });
    }
    async findOneByName(name) {
        return await this.userModel.findOne({ "name": name });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USERS_MODEL')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map