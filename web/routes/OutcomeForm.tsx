import {
  Grid,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

import * as React from "react";

interface OutcomeFormProps {
  direction: string;
  metric: string;
  object: string;
  context: string;
}

const handleChange = (event: SelectChangeEvent) => {
  console.log(event.target.value);
};

function OutcomeForm({
  direction,
  metric,
  object,
  context,
}: OutcomeFormProps): JSX.Element {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} key={direction}>
        <Select
          required
          id="direction"
          label="Direction"
          variant="standard"
          value={direction}
          onChange={handleChange}
        >
          <MenuItem value={"increase"}>Increase</MenuItem>
          <MenuItem value={"minimize"}>Minimize</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} sm={3} key={metric}>
        <TextField
          required
          id="metric"
          name="metric"
          label="Metric"
          fullWidth
          defaultValue={metric}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={3} key={object}>
        <TextField
          required
          id="oobject"
          name="oobject"
          label="Outcome Object"
          fullWidth
          defaultValue={object}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} key={context}>
        <TextField
          required
          id="ocontext"
          name="ocontext"
          label="Outcome Context"
          fullWidth
          defaultValue={context}
          variant="standard"
        />
      </Grid>
    </React.Fragment>
  );
}

export { OutcomeForm };
