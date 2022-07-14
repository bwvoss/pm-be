/**
 * @generated SignedSource<<751610e64e2f15b9757f3273227822b5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type InterviewQuery$variables = {
  interview_id: string;
};
export type InterviewQuery$data = {
  readonly interview: {
    readonly interviewee_name: string;
    readonly jobs: ReadonlyArray<{
      readonly id: string;
      readonly verb: string;
      readonly object: string;
      readonly context: string | null;
      readonly outcomes: ReadonlyArray<{
        readonly id: string;
        readonly direction: string;
        readonly metric: string;
        readonly object: string;
        readonly context: string | null;
      }> | null;
    }> | null;
  } | null;
};
export type InterviewQuery = {
  variables: InterviewQuery$variables;
  response: InterviewQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "interview_id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "interview_id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "interviewee_name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "object",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "context",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Job",
  "kind": "LinkedField",
  "name": "jobs",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "verb",
      "storageKey": null
    },
    (v4/*: any*/),
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Outcome",
      "kind": "LinkedField",
      "name": "outcomes",
      "plural": true,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "direction",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "metric",
          "storageKey": null
        },
        (v4/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InterviewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Interview",
        "kind": "LinkedField",
        "name": "interview",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InterviewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Interview",
        "kind": "LinkedField",
        "name": "interview",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v6/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b1a096c5d755000d351e45f8644bfcc3",
    "id": null,
    "metadata": {},
    "name": "InterviewQuery",
    "operationKind": "query",
    "text": "query InterviewQuery(\n  $interview_id: String!\n) {\n  interview(id: $interview_id) {\n    interviewee_name\n    jobs {\n      id\n      verb\n      object\n      context\n      outcomes {\n        id\n        direction\n        metric\n        object\n        context\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "83b177f87deadb9ebdcb6347ea101c15";

export default node;
