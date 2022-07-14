import { Grid, TextField } from "@mui/material";
import {
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
} from "@mui/lab";
import * as React from "react";
import { OutcomeForm } from "./OutcomeForm";

interface JobFormProps {
  verb: string;
  object: string;
  context: string;
  outcomes: array;
}

function JobForm({
  verb,
  object,
  context,
  outcomes,
}: JobFormProps): JSX.Element {
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
              <OutcomeForm {...outcome} key={outcome.id} />
            ))}
          </Grid>
        </TimelineContent>
      </TimelineItem>
    </React.Fragment>
  );
}

export { JobForm };
