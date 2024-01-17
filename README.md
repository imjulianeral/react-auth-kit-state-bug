# React Auth Kit State Bug

This repo reproduces a bug on the v3 version of `react-auth-kit`.

## Description

When signing in/out it is expected to get an automatic state change on the `useIsAuthenticated` hook, but this doesn't currently happen in v3, in v2 works as expected.

There are 3 branches in this repo:

1. `main` and `v3` which reproduces the error wit v3.
2. `v2` which uses the v2 version and works as expected.
