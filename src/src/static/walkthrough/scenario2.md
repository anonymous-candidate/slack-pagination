We issue our request for the next page of no more than 2 results like this:

GET slack.com/api/users.list?limit=2&cursor=dXNlcjpVMEc5V0ZYTlo%3D&token=xoxp-1234-5678-90123
And (spoiler alert): we only get one result back. This workspace actually only has three users. We've reached the end of our pagination journey and there are no more results to retrieve. Our next_cursor becomes but an empty string:


On your next call to the same method, set the cursor parameter equal to the next_cursor value you received on the last request to retrieve the next portion of the collection.
An empty, null, or non-existent next_cursor in the response indicates no further results.
