"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const app = (0, express_1.default)();
// app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes
// Rutas de usuario
app.use(indexRoutes_1.default);
exports.default = app;