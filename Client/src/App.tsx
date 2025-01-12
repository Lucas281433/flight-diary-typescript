import { useEffect, useState } from "react";
import { DiaryEntry } from "./types";
import { getAllEntries } from "./services/diaryService";
import { Avatar, Stack } from "@mui/material";

import Entries from "./components/Entries/Entries";
import EntryForm from "./components/EntryForm/EntryForm";
import avatarImage from "./assets/Ilari.webp";

/**
 * The main App component.
 *
 * Renders a header with the title and an avatar image.
 * Then renders an EntryForm component and an Entries component.
 *
 * The EntryForm component is given a function to update the diary entries state
 * and the current diary entries.
 *
 * The Entries component is given the current diary entries.
 */
const App = () => {
  const [diaryEntry, setDiaryEntry] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((entries) => {
      setDiaryEntry(entries);
    });
  }, []);

  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="center" mb={2}>
        <h1>Ilari's flight diaries</h1>
        <Avatar src={avatarImage} className="avatar" />
      </Stack>
      <EntryForm setDiaryEntry={setDiaryEntry} diaryEntry={diaryEntry} />
      <Entries diaryEntry={diaryEntry} />
    </div>
  );
};

export default App;
