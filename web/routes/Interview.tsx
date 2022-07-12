import { Container, Typography } from "@mui/material";
import { Timeline } from "@mui/lab";
import { JobOutcomeForm } from "./JobOutcomeForm";
import { type InterviewQuery$data } from "../queries/InterviewQuery.graphql";

function Interview(props: InterviewQuery$data): JSX.Element {
  const { interview } = props;

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "grid",
        gridGap: 24,
        gridTemplateColumns: "160px auto",
        my: 3,
      }}
    >
      <Typography
        variant="h3"
        children={interview.interviewee_name}
        gutterBottom
      />
      <Timeline>
        {interview.jobs.map((job) => (
          <JobOutcomeForm {...job} key={job.id} />
        ))}
      </Timeline>
    </Container>
  );
}

export default Interview;
export type Interview = typeof Interview;
