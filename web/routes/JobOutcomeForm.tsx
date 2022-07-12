import {
  Grid,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

import {
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
} from "@mui/lab";
import * as React from "react";

interface JobOutcomeFormProps {
  verb: string;
  object: string;
  context: string;
  outcomes: array;
}

const handleChange = (event: SelectChangeEvent) => {
  console.log(event.target.value);
};

function JobOutcomeForm({
  verb,
  object,
  context,
  outcomes,
}: JobOutcomeFormProps): JSX.Element {
  return (
    <React.Fragment>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} key={verb}>
              <TextField
                required
                id="verb"
                name="verb"
                label="Verb"
                fullWidth
                defaultValue={verb}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6} key={object}>
              <TextField
                required
                id="object"
                name="object"
                label="Object"
                fullWidth
                defaultValue={object}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} key={context}>
              <TextField
                required
                id="context"
                name="context"
                label="Context"
                fullWidth
                defaultValue={context}
                variant="standard"
              />
            </Grid>
            {outcomes.map((outcome) => (
              <Grid item xs={12} key={outcome.id}>
                <Select
                  required
                  id="direction"
                  value={outcome.direction}
                  onChange={handleChange}
                  label="Direction"
                  variant="standard"
                >
                  <MenuItem value={"increase"}>Increase</MenuItem>
                  <MenuItem value={"minimize"}>Minimize</MenuItem>
                </Select>
              </Grid>
            ))}
          </Grid>
        </TimelineContent>
      </TimelineItem>
    </React.Fragment>
  );
}

export { JobOutcomeForm };
