When accessing the first virtual page of a paginated collection — for instance making a users.list request for the first time — you'll receive a response_metadata attribute containing a cursor for your next request.

Here's an example request to users.list, where we limit our list of users to 2 users per "page", making it easier to test on a workspace with a low number of users.

In return, we get our typical users.list response, limited to 2 results.

Cursor-paginated methods accept cursor and limit parameters.
If you don't pass a cursor parameter, but do pass a limit parameter, the default value retrieves the first portion (or "page") of results.
