/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticateSuccessImport } from './routes/authenticate-success'
import { Route as IndexImport } from './routes/index'
import { Route as SpaceSpaceIdImport } from './routes/space/$spaceId'
import { Route as FriendsAccountIdImport } from './routes/friends/$accountId'
import { Route as AccountInboxInboxIdImport } from './routes/account-inbox/$inboxId'
import { Route as SpaceSpaceIdIndexImport } from './routes/space/$spaceId/index'
import { Route as SpaceSpaceIdUsersImport } from './routes/space/$spaceId/users'
import { Route as SpaceSpaceIdPublicIntegrationImport } from './routes/space/$spaceId/public-integration'
import { Route as SpaceSpaceIdPlaygroundImport } from './routes/space/$spaceId/playground'
import { Route as SpaceSpaceIdEventsImport } from './routes/space/$spaceId/events'
import { Route as SpaceSpaceIdChatImport } from './routes/space/$spaceId/chat'

// Create Virtual Routes

const PlaygroundLazyImport = createFileRoute('/playground')()
const LoginLazyImport = createFileRoute('/login')()

// Create/Update Routes

const PlaygroundLazyRoute = PlaygroundLazyImport.update({
  id: '/playground',
  path: '/playground',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/playground.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const AuthenticateSuccessRoute = AuthenticateSuccessImport.update({
  id: '/authenticate-success',
  path: '/authenticate-success',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SpaceSpaceIdRoute = SpaceSpaceIdImport.update({
  id: '/space/$spaceId',
  path: '/space/$spaceId',
  getParentRoute: () => rootRoute,
} as any)

const FriendsAccountIdRoute = FriendsAccountIdImport.update({
  id: '/friends/$accountId',
  path: '/friends/$accountId',
  getParentRoute: () => rootRoute,
} as any)

const AccountInboxInboxIdRoute = AccountInboxInboxIdImport.update({
  id: '/account-inbox/$inboxId',
  path: '/account-inbox/$inboxId',
  getParentRoute: () => rootRoute,
} as any)

const SpaceSpaceIdIndexRoute = SpaceSpaceIdIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => SpaceSpaceIdRoute,
} as any)

const SpaceSpaceIdUsersRoute = SpaceSpaceIdUsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => SpaceSpaceIdRoute,
} as any)

const SpaceSpaceIdPublicIntegrationRoute =
  SpaceSpaceIdPublicIntegrationImport.update({
    id: '/public-integration',
    path: '/public-integration',
    getParentRoute: () => SpaceSpaceIdRoute,
  } as any)

const SpaceSpaceIdPlaygroundRoute = SpaceSpaceIdPlaygroundImport.update({
  id: '/playground',
  path: '/playground',
  getParentRoute: () => SpaceSpaceIdRoute,
} as any)

const SpaceSpaceIdEventsRoute = SpaceSpaceIdEventsImport.update({
  id: '/events',
  path: '/events',
  getParentRoute: () => SpaceSpaceIdRoute,
} as any)

const SpaceSpaceIdChatRoute = SpaceSpaceIdChatImport.update({
  id: '/chat',
  path: '/chat',
  getParentRoute: () => SpaceSpaceIdRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/authenticate-success': {
      id: '/authenticate-success'
      path: '/authenticate-success'
      fullPath: '/authenticate-success'
      preLoaderRoute: typeof AuthenticateSuccessImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/playground': {
      id: '/playground'
      path: '/playground'
      fullPath: '/playground'
      preLoaderRoute: typeof PlaygroundLazyImport
      parentRoute: typeof rootRoute
    }
    '/account-inbox/$inboxId': {
      id: '/account-inbox/$inboxId'
      path: '/account-inbox/$inboxId'
      fullPath: '/account-inbox/$inboxId'
      preLoaderRoute: typeof AccountInboxInboxIdImport
      parentRoute: typeof rootRoute
    }
    '/friends/$accountId': {
      id: '/friends/$accountId'
      path: '/friends/$accountId'
      fullPath: '/friends/$accountId'
      preLoaderRoute: typeof FriendsAccountIdImport
      parentRoute: typeof rootRoute
    }
    '/space/$spaceId': {
      id: '/space/$spaceId'
      path: '/space/$spaceId'
      fullPath: '/space/$spaceId'
      preLoaderRoute: typeof SpaceSpaceIdImport
      parentRoute: typeof rootRoute
    }
    '/space/$spaceId/chat': {
      id: '/space/$spaceId/chat'
      path: '/chat'
      fullPath: '/space/$spaceId/chat'
      preLoaderRoute: typeof SpaceSpaceIdChatImport
      parentRoute: typeof SpaceSpaceIdImport
    }
    '/space/$spaceId/events': {
      id: '/space/$spaceId/events'
      path: '/events'
      fullPath: '/space/$spaceId/events'
      preLoaderRoute: typeof SpaceSpaceIdEventsImport
      parentRoute: typeof SpaceSpaceIdImport
    }
    '/space/$spaceId/playground': {
      id: '/space/$spaceId/playground'
      path: '/playground'
      fullPath: '/space/$spaceId/playground'
      preLoaderRoute: typeof SpaceSpaceIdPlaygroundImport
      parentRoute: typeof SpaceSpaceIdImport
    }
    '/space/$spaceId/public-integration': {
      id: '/space/$spaceId/public-integration'
      path: '/public-integration'
      fullPath: '/space/$spaceId/public-integration'
      preLoaderRoute: typeof SpaceSpaceIdPublicIntegrationImport
      parentRoute: typeof SpaceSpaceIdImport
    }
    '/space/$spaceId/users': {
      id: '/space/$spaceId/users'
      path: '/users'
      fullPath: '/space/$spaceId/users'
      preLoaderRoute: typeof SpaceSpaceIdUsersImport
      parentRoute: typeof SpaceSpaceIdImport
    }
    '/space/$spaceId/': {
      id: '/space/$spaceId/'
      path: '/'
      fullPath: '/space/$spaceId/'
      preLoaderRoute: typeof SpaceSpaceIdIndexImport
      parentRoute: typeof SpaceSpaceIdImport
    }
  }
}

// Create and export the route tree

interface SpaceSpaceIdRouteChildren {
  SpaceSpaceIdChatRoute: typeof SpaceSpaceIdChatRoute
  SpaceSpaceIdEventsRoute: typeof SpaceSpaceIdEventsRoute
  SpaceSpaceIdPlaygroundRoute: typeof SpaceSpaceIdPlaygroundRoute
  SpaceSpaceIdPublicIntegrationRoute: typeof SpaceSpaceIdPublicIntegrationRoute
  SpaceSpaceIdUsersRoute: typeof SpaceSpaceIdUsersRoute
  SpaceSpaceIdIndexRoute: typeof SpaceSpaceIdIndexRoute
}

const SpaceSpaceIdRouteChildren: SpaceSpaceIdRouteChildren = {
  SpaceSpaceIdChatRoute: SpaceSpaceIdChatRoute,
  SpaceSpaceIdEventsRoute: SpaceSpaceIdEventsRoute,
  SpaceSpaceIdPlaygroundRoute: SpaceSpaceIdPlaygroundRoute,
  SpaceSpaceIdPublicIntegrationRoute: SpaceSpaceIdPublicIntegrationRoute,
  SpaceSpaceIdUsersRoute: SpaceSpaceIdUsersRoute,
  SpaceSpaceIdIndexRoute: SpaceSpaceIdIndexRoute,
}

const SpaceSpaceIdRouteWithChildren = SpaceSpaceIdRoute._addFileChildren(
  SpaceSpaceIdRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/authenticate-success': typeof AuthenticateSuccessRoute
  '/login': typeof LoginLazyRoute
  '/playground': typeof PlaygroundLazyRoute
  '/account-inbox/$inboxId': typeof AccountInboxInboxIdRoute
  '/friends/$accountId': typeof FriendsAccountIdRoute
  '/space/$spaceId': typeof SpaceSpaceIdRouteWithChildren
  '/space/$spaceId/chat': typeof SpaceSpaceIdChatRoute
  '/space/$spaceId/events': typeof SpaceSpaceIdEventsRoute
  '/space/$spaceId/playground': typeof SpaceSpaceIdPlaygroundRoute
  '/space/$spaceId/public-integration': typeof SpaceSpaceIdPublicIntegrationRoute
  '/space/$spaceId/users': typeof SpaceSpaceIdUsersRoute
  '/space/$spaceId/': typeof SpaceSpaceIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/authenticate-success': typeof AuthenticateSuccessRoute
  '/login': typeof LoginLazyRoute
  '/playground': typeof PlaygroundLazyRoute
  '/account-inbox/$inboxId': typeof AccountInboxInboxIdRoute
  '/friends/$accountId': typeof FriendsAccountIdRoute
  '/space/$spaceId/chat': typeof SpaceSpaceIdChatRoute
  '/space/$spaceId/events': typeof SpaceSpaceIdEventsRoute
  '/space/$spaceId/playground': typeof SpaceSpaceIdPlaygroundRoute
  '/space/$spaceId/public-integration': typeof SpaceSpaceIdPublicIntegrationRoute
  '/space/$spaceId/users': typeof SpaceSpaceIdUsersRoute
  '/space/$spaceId': typeof SpaceSpaceIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/authenticate-success': typeof AuthenticateSuccessRoute
  '/login': typeof LoginLazyRoute
  '/playground': typeof PlaygroundLazyRoute
  '/account-inbox/$inboxId': typeof AccountInboxInboxIdRoute
  '/friends/$accountId': typeof FriendsAccountIdRoute
  '/space/$spaceId': typeof SpaceSpaceIdRouteWithChildren
  '/space/$spaceId/chat': typeof SpaceSpaceIdChatRoute
  '/space/$spaceId/events': typeof SpaceSpaceIdEventsRoute
  '/space/$spaceId/playground': typeof SpaceSpaceIdPlaygroundRoute
  '/space/$spaceId/public-integration': typeof SpaceSpaceIdPublicIntegrationRoute
  '/space/$spaceId/users': typeof SpaceSpaceIdUsersRoute
  '/space/$spaceId/': typeof SpaceSpaceIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/authenticate-success'
    | '/login'
    | '/playground'
    | '/account-inbox/$inboxId'
    | '/friends/$accountId'
    | '/space/$spaceId'
    | '/space/$spaceId/chat'
    | '/space/$spaceId/events'
    | '/space/$spaceId/playground'
    | '/space/$spaceId/public-integration'
    | '/space/$spaceId/users'
    | '/space/$spaceId/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/authenticate-success'
    | '/login'
    | '/playground'
    | '/account-inbox/$inboxId'
    | '/friends/$accountId'
    | '/space/$spaceId/chat'
    | '/space/$spaceId/events'
    | '/space/$spaceId/playground'
    | '/space/$spaceId/public-integration'
    | '/space/$spaceId/users'
    | '/space/$spaceId'
  id:
    | '__root__'
    | '/'
    | '/authenticate-success'
    | '/login'
    | '/playground'
    | '/account-inbox/$inboxId'
    | '/friends/$accountId'
    | '/space/$spaceId'
    | '/space/$spaceId/chat'
    | '/space/$spaceId/events'
    | '/space/$spaceId/playground'
    | '/space/$spaceId/public-integration'
    | '/space/$spaceId/users'
    | '/space/$spaceId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthenticateSuccessRoute: typeof AuthenticateSuccessRoute
  LoginLazyRoute: typeof LoginLazyRoute
  PlaygroundLazyRoute: typeof PlaygroundLazyRoute
  AccountInboxInboxIdRoute: typeof AccountInboxInboxIdRoute
  FriendsAccountIdRoute: typeof FriendsAccountIdRoute
  SpaceSpaceIdRoute: typeof SpaceSpaceIdRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticateSuccessRoute: AuthenticateSuccessRoute,
  LoginLazyRoute: LoginLazyRoute,
  PlaygroundLazyRoute: PlaygroundLazyRoute,
  AccountInboxInboxIdRoute: AccountInboxInboxIdRoute,
  FriendsAccountIdRoute: FriendsAccountIdRoute,
  SpaceSpaceIdRoute: SpaceSpaceIdRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/authenticate-success",
        "/login",
        "/playground",
        "/account-inbox/$inboxId",
        "/friends/$accountId",
        "/space/$spaceId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/authenticate-success": {
      "filePath": "authenticate-success.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/playground": {
      "filePath": "playground.lazy.tsx"
    },
    "/account-inbox/$inboxId": {
      "filePath": "account-inbox/$inboxId.tsx"
    },
    "/friends/$accountId": {
      "filePath": "friends/$accountId.tsx"
    },
    "/space/$spaceId": {
      "filePath": "space/$spaceId.tsx",
      "children": [
        "/space/$spaceId/chat",
        "/space/$spaceId/events",
        "/space/$spaceId/playground",
        "/space/$spaceId/public-integration",
        "/space/$spaceId/users",
        "/space/$spaceId/"
      ]
    },
    "/space/$spaceId/chat": {
      "filePath": "space/$spaceId/chat.tsx",
      "parent": "/space/$spaceId"
    },
    "/space/$spaceId/events": {
      "filePath": "space/$spaceId/events.tsx",
      "parent": "/space/$spaceId"
    },
    "/space/$spaceId/playground": {
      "filePath": "space/$spaceId/playground.tsx",
      "parent": "/space/$spaceId"
    },
    "/space/$spaceId/public-integration": {
      "filePath": "space/$spaceId/public-integration.tsx",
      "parent": "/space/$spaceId"
    },
    "/space/$spaceId/users": {
      "filePath": "space/$spaceId/users.tsx",
      "parent": "/space/$spaceId"
    },
    "/space/$spaceId/": {
      "filePath": "space/$spaceId/index.tsx",
      "parent": "/space/$spaceId"
    }
  }
}
ROUTE_MANIFEST_END */
