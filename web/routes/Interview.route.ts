import { graphql } from "relay-runtime";
import { type Route } from "../core";
import { type InterviewQuery } from "../queries/InterviewQuery.graphql";
import { type Interview } from "./Interview";

export default {
  path: "/interview/:interview_id(\\w+)",
  query: graphql`
    query InterviewQuery($interview_id: String!) {
      interview(id: $interview_id) {
        interviewee_name
        jobs {
          verb
          object
          context
          outcomes {
            direction
            metric
            object
            context
          }
        }
      }
    }
  `,
  component: () => import(/* webpackChunkName: "home" */ "./Interview"),
  response: (data) => ({
    title: "Interview",
    description: "Capture the JTBD and Outcomes during an interview",
    props: data,
  }),
} as Route<Interview, InterviewQuery>;
