import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const baseUrl = "/api/diaries";

/**
 * Gets all diary entries from the API.
 *
 * @returns An array of DiaryEntry objects
 */
export const getAllEntries = async () => {
  const request = await axios.get<DiaryEntry[]>(baseUrl);
  return request.data;
};

/**
 * Creates a new diary entry in the API.
 *
 * @param {NewDiaryEntry} entry A NewDiaryEntry object containing the
 *                              new diary entry's data.
 * @returns A DiaryEntry object representing the newly created diary entry.
 */
export const createNewEntry = async (entry: NewDiaryEntry) => {
  const request = await axios.post<DiaryEntry>(baseUrl, entry);
  return request.data;
};
