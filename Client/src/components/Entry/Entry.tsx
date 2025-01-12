import { Card, CardContent, CardMedia } from "@mui/material";
import { EntryProps } from "../../types";

import "./Entry.css";
import diaryEntryImg from "../../assets/diary-entry.webp";

/**
 * Component for rendering a diary entry.
 *
 * @param {EntryProps} props - Component props containing a diary entry.
 * @returns {JSX.Element} A card displaying the date, visibility, and weather of the diary entry.
 */
const Entry = (props: EntryProps) => {
  return (
    <Card className="entry-card">
      <CardContent>
        <p className="entry-date">
          <strong>{props.entry.date}</strong>
        </p>
        <CardMedia
          component="img"
          image={diaryEntryImg}
          height="200"
          className="entry-media-img"
        />
        <p>
          <strong>Visibility: {props.entry.visibility}</strong>
        </p>
        <p>
          <strong>Weather: {props.entry.weather}</strong>
        </p>
      </CardContent>
    </Card>
  );
};

export default Entry;
