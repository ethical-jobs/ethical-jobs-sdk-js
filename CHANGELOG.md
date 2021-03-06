# [staged]

# [v1.7.0]

- ATS-77 Add ability to refresh tokens on GraphQL requests 

# [v1.6.0 - v1.6.1]

- ATS-80 Support refresh tokens on meta property

# 1.5.0

- ATS-72 Add refresh token to auth process

# 1.4.0

- ATS-79 Move token access to back channel

# [v1.3.0 - v1.3.1]

- Trello-eng-158 Add download secret to file download url
- Update slack webhook
- Bump version

# 1.2.9

- Added test to see if window.\_env\_ is available for use.

# 1.2.8

- Enable access to window.\_env\_ for environment keys.

# 1.2.7

- Bumped the npm package version to reflect the release build.

# 1.2.6

- Drone config rolled back to drone version 0.8 syntax.

# 1.2.4

- catching exceptions in localStorage access
- checking storage existence for Android

# 1.2.1

- Renaming NPM package

# 1.2.0

- refactoring build process
- migrating to NPM organisation ethical-jobs
- fixing local storage issue on older browsers

# 1.1.0

- Adding headers to verb functions
- adding getAuthToken helper

# 1.0.0

- Bumping sem ver 
- Adding tests for checkStatus, fixing status on ApiError

# 0.3.5

- Updated AUTH env variables to match user clients
- Invalid tokens are now caught and routed to no-existing user `/users/-1` for a 404

# 0.3.1

- Addressed issues in Api.auth.login helper flow

# 0.3.0

- Breaking changes bumping feature ver
- Updating auth module to new auth workflow on API
- Createing environment variable helper function

# 0.2.16

- Increase timeout on HTTP requests to 15000

# 0.2.15

- Set body of GET and HEAD requests to unrefined instead of null to support IE Edge

# 0.2.13

- Added Array.from polyfill to LocalStorage shim 

# 0.2.12

- Added media.detach helper

# 0.2.11

- Isomorphic SSL support (basic, just ignoring certs)

# 0.2.10

- SSL support

# 0.2.9

- Refactored stringifier
- Refactored immutable converter
- Truthy params are set to valid URL values

# 0.2.6

- Added isomorphic shims for FormData and localStorage
