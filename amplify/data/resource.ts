import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Server: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
