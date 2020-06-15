## Overview: cursor-based pagination

For larger collections like channel and user lists, Slack API methods return results using a cursor-based approach.

Cursors are like pointers. Pointers point at things: they reference a specific iota, a place in the list where your last request left off. They help us avoid loading an entire set (or a thousand) just to give you your next slice.

A cursor-paginated method returns two things: a portion of the total set of results, and a cursor that points to the next portion of the results.

**Cursor-based pagination is spreading across the platform quickly and is mandatory on some methods.**

Please paginate along with us.
