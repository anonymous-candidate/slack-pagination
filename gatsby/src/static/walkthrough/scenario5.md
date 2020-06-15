And one final note:
Cursors expire and are meant to be used within a reasonable amount of time. You should have no trouble pausing between [rate limiting](https://api.slack.com/docs/rate-limits) windows, but do not persist cursors for hours or days.
Enhanced rate limiting conditions are provided when using cursor-based pagination.
