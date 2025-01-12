"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entries_1 = __importDefault(require("../../data/entries"));
/**
 * Returns all diary entries.
 *
 * @returns {DiaryEntry[]} An array of all diary entries.
 */
const getEntries = () => {
    return entries_1.default;
};
/**
 * Returns diary entries without the comment property.
 *
 * @returns {NonSensitiveDiaryEntry[]} An array of diary entries without the comment property.
 */
const getNonSensitiveEntries = () => {
    return entries_1.default.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};
/**
 * Adds a new diary entry to the list of entries.
 *
 * @param {NewDiaryEntry} entry The diary entry to add.
 * @returns {DiaryEntry} The added diary entry with an auto-generated id.
 */
const addDiary = (entry) => {
    const newDiaryEntry = Object.assign({ id: Math.max(...entries_1.default.map((d) => d.id)) + 1 }, entry);
    entries_1.default.push(newDiaryEntry);
    return newDiaryEntry;
};
/**
 * Retrieves a diary entry by its ID.
 *
 * @param {number} id - The ID of the diary entry to retrieve.
 * @returns {DiaryEntry | undefined} The diary entry with the given ID, or undefined if not found.
 */
const findById = (id) => {
    const entry = entries_1.default.find((d) => d.id === id);
    return entry;
};
exports.default = { getEntries, addDiary, getNonSensitiveEntries, findById };
