We're adding cursor-based pagination to almost every collection-yielding method.
Today, cursor-based pagination is supported by these methods:
conversations.history
conversations.list
conversations.members
conversations.replies
files.info
reactions.list
stars.list
users.list
channels.list (deprecated)
groups.list (deprecated)
im.list (deprecated)
mpim.list (deprecated)
Please note that when you are trying to page through channels.list, the exclude_members argument won't work too well with pagination at this time. Channels with very large memberships and teams with many channels may cause the method to throw HTTP 500 errors. Please exclude memberships with exclude_members and look them up atomically with channels.info instead.
