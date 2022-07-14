import { Container, Typography } from "@mui/material";
import { Timeline } from "@mui/lab";
import { JobForm } from "./JobForm";
import { type InterviewQuery$data } from "../queries/InterviewQuery.graphql";

function Interview(props: InterviewQuery$data): JSX.Element {
  const { interview } = props;

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "grid",
        gridGap: 24,
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
          <JobForm {...job} key={job.id} />
        ))}
      </Timeline>
    </Container>
  );
}

export default Interview;
export type Interview = typeof Interview;
