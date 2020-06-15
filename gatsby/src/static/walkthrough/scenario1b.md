Skip down to the bottom field of each user entry to see the `response_metadata`, containing `cursor` information on the next page of results.

Within `response_metadata` you'll note `next_cursor`, a string pointing at the next page of results. To retrieve the next page of results, provide this value as the `cursor` parameter to the paginated method.

**(Cursor strings typically end with the = character. When presenting this value as a URL or POST parameter, it must be encoded as %3D.)**