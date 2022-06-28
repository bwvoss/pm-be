/**
 * @generated SignedSource<<0799691f084367ff6dcac3a87eabb33f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeQuery$variables = {};
export type HomeQuery$data = {
  readonly user: {
    readonly id: string;
  } | null;
};
export type HomeQuery = {
  variables: HomeQuery$variables;
  response: HomeQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "username",
        "value": "bot"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": "user(username:\"bot\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "28825ac3935c10dc2884277974636077",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  user(username: \"bot\") {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "370b5a56c793cdb8d485be5f48e140db";

export default node;
