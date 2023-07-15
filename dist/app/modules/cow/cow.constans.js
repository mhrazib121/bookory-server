"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowsSearchFields = exports.cowsFilterFields = exports.CowCategory = exports.CowLabel = exports.CowBreed = exports.CowLocation = void 0;
exports.CowLocation = [
    "Dhaka",
    "Chattogram",
    "Barishal",
    "Rajshahi",
    "Sylhet",
    "Comilla",
    "Rangpur",
    "Mymensingh",
];
exports.CowBreed = [
    "Brahman",
    "Nellore",
    "Sahiwal",
    "Gir",
    "Indigenous",
    "Tharparkar",
    "Kankrej",
];
exports.CowLabel = ["for sale", "sold out"];
exports.CowCategory = ["Dairy", "Beef", "DualPurpose"];
exports.cowsFilterFields = [
    "searchTerm",
    "location",
    "breed",
    "category",
    "minPrice",
    "maxPrice",
];
exports.cowsSearchFields = ["location", "breed", "category"];
