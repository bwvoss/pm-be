/**
 * @generated SignedSource<<e5b4641f85e8b35ef1ea110739f506d4>>
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
      readonly verb: string;
      readonly object: string;
      readonly context: string | null;
      readonly outcomes: ReadonlyArray<{
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
  "name": "verb",
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
  "kind": "ScalarField",
  "name": "direction",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metric",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Job",
            "kind": "LinkedField",
            "name": "jobs",
            "plural": true,
            "selections": [
              (v3/*: any*/),
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
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Job",
            "kind": "LinkedField",
            "name": "jobs",
            "plural": true,
            "selections": [
              (v3/*: any*/),
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
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "efc95e04ea97d722e7b78863439e2ceb",
    "id": null,
    "metadata": {},
    "name": "InterviewQuery",
    "operationKind": "query",
    "text": "query InterviewQuery(\n  $interview_id: String!\n) {\n  interview(id: $interview_id) {\n    interviewee_name\n    jobs {\n      verb\n      object\n      context\n      outcomes {\n        direction\n        metric\n        object\n        context\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "37708174315ba33f72ac194f6af423f7";

export default node;
