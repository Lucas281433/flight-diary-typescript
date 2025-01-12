import { useState } from "react";
import { createNewEntry } from "../../services/diaryService";
import { EntryFormProps, Visibility, Weather } from "../../types";
import {
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import Notification from "../Notification/Notification";
import axios from "axios";
import "./EntryForm.css";

/**
 * Component for rendering a form for adding new diary entries.
 *
 * @param {EntryFormProps} props - Component props containing a function for
 *                                 updating the diary entry state and the current
 *                                 diary entries.
 * @returns {JSX.Element} A form with fields for date, visibility, weather, and
 *                        comment. The form also displays a notification if the
 *                        submission of the form fails.
 */
const EntryForm = (props: EntryFormProps) => {
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

/**
 * Handles the submission of a new diary entry form.
 * 
 * Prevents the default form submission event, attempts to create a new diary entry
 * using the provided date, visibility, weather, and comment values, and updates the 
 * diary entries state on success. Resets form fields after successful submission.
 * Displays an error message if the submission fails.
 *
 * @param {React.SyntheticEvent} event - The form submission event.
 */
  const addNewEntry = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const newEntry = await createNewEntry({
        date,
        visibility,
        weather,
        comment,
      });
      props.setDiaryEntry(props.diaryEntry.concat(newEntry));
      setDate("");
      setVisibility(Visibility.Great);
      setWeather(Weather.Sunny);
      setComment("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="entry-form-background"
    >
      <Notification message={message} />
      <form onSubmit={addNewEntry}>
        <h2>Add New Entry</h2>
        <div>
          <FormLabel>
            <strong>Date: </strong>
          </FormLabel>
          <TextField
            size="small"
            type="date"
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </div>
        <FormLabel id="demo-radio-buttons-group-label">
          <strong>Visibility:</strong>
        </FormLabel>
        <RadioGroup row aria-labelledby="demo-radio-buttons-group-label">
          <FormControlLabel
            label="Great"
            control={<Radio />}
            value={Visibility.Great}
            onChange={() => setVisibility(Visibility.Great)}
            checked={visibility === Visibility.Great}
          />

          <FormControlLabel
            label="Good"
            control={<Radio />}
            value={Visibility.Good}
            onChange={() => setVisibility(Visibility.Good)}
            checked={visibility === Visibility.Good}
          />

          <FormControlLabel
            label="Ok"
            control={<Radio />}
            value={Visibility.Ok}
            onChange={() => setVisibility(Visibility.Ok)}
            checked={visibility === Visibility.Ok}
          />

          <FormControlLabel
            label="Poor"
            control={<Radio />}
            value={Visibility.Poor}
            onChange={() => setVisibility(Visibility.Poor)}
            checked={visibility === Visibility.Poor}
          />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">
          <strong>Weather:</strong>
        </FormLabel>
        <RadioGroup row aria-labelledby="demo-radio-buttons-group-label">
          <FormControlLabel
            label="Sunny"
            control={<Radio />}
            value={weather}
            onChange={() => setWeather(Weather.Sunny)}
            checked={weather === Weather.Sunny}
          />

          <FormControlLabel
            label="Rainy"
            control={<Radio />}
            value={Weather.Rainy}
            onChange={() => setWeather(Weather.Rainy)}
            checked={weather === Weather.Rainy}
          />

          <FormControlLabel
            label="Cloudy"
            control={<Radio />}
            value={Weather.Cloudy}
            onChange={() => setWeather(Weather.Cloudy)}
            checked={weather === Weather.Cloudy}
          />

          <FormControlLabel
            label="Stormy"
            control={<Radio />}
            value={Weather.Stormy}
            onChange={() => setWeather(Weather.Stormy)}
            checked={weather === Weather.Stormy}
          />

          <FormControlLabel
            label="Windy"
            control={<Radio />}
            value={Weather.Windy}
            onChange={() => setWeather(Weather.Windy)}
            checked={weather === Weather.Windy}
          />
        </RadioGroup>

        <TextField
          label="Comment"
          size="small"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />

        <Button variant="contained" type="submit">
          Add Entry
        </Button>
      </form>
    </Stack>
  );
};

export default EntryForm;
