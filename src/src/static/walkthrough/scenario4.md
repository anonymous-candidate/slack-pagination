Error conditions
Currently, the only error specific to pagination that you might encounter is:
invalid_cursor - Returned when navigating a paginated collection and providing a cursor value that just does not compute — either it's gibberish, somehow encoded wrong, or of too great a vintage.
Invalid limit values are currently magically adjusted to something sensible. We recommend providing reasonable values for best results, as with most parameters.

