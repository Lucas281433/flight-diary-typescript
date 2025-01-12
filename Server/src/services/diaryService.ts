import diaries from "../../data/entries";
import {
  DiaryEntry,
  NonSensitiveDiaryEntry,
  NewDiaryEntry,
} from "../types";

/**
 * Returns all diary entries.
 *
 * @returns {DiaryEntry[]} An array of all diary entries.
 */
const getEntries = (): DiaryEntry[] => {
  return diaries;
};

/**
 * Returns diary entries without the comment property.
 *
 * @returns {NonSensitiveDiaryEntry[]} An array of diary entries without the comment property.
 */
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
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
const addDiary = ( entry: NewDiaryEntry ): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

/**
 * Retrieves a diary entry by its ID.
 *
 * @param {number} id - The ID of the diary entry to retrieve.
 * @returns {DiaryEntry | undefined} The diary entry with the given ID, or undefined if not found.
 */
const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};

export default { getEntries, addDiary, getNonSensitiveEntries, findById };
