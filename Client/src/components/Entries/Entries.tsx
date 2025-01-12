import { Stack } from "@mui/material";
import { EntriesProps } from "../../types";

import Entry from "../Entry/Entry";
import "./Entries.css";

/**
 * Component for rendering a list of diary entries
 * 
 * @param {{ diaryEntry: DiaryEntry[] }} props Component props
 * @returns {JSX.Element} JSX element representing the component
 */
const Entries = (props: EntriesProps) => {
  return (
    <div>
      <h2 className="title">Diary Entries</h2>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
        gap={5}
      >
        {props.diaryEntry.map((entry) => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </Stack>
    </div>
  );
};

export default Entries;
