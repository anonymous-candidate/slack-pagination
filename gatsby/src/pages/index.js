import React from "react"

import Layout from "../components/layout"
import Sandbox from "../components/sandbox"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Pagination</h1>
    <div>
      <p>
        Throughout the Slack platform, you'll encounter collections of things.
        Lists of users. Arrays of channels. A pride of lion emoji.
      </p>
      <p>
        When you call an API method to retrieve most of these collections,
        they're returned to you in portions. Our goal is to familiarize you with
        the main pagination patterns you can use with our API methods, and give
        you the tools and inspiration you need to summon your desired datasets!
      </p>
      <p>
        Most methods that support pagination use a cursor-based approach,
        although we currently support a few “classic” approaches to pagination
        in our legacy methods. The individual documentation for each API method
        is your source of truth for which pattern the method follows.
      </p>
      <br></br>
      <h2>Overview: cursor-based pagination</h2>
      <br></br>
      <p>
        For larger collections like channel and user lists, Slack API methods
        return results using a cursor-based approach.
      </p>

      <p>
        Cursors are like pointers. Pointers point at things: they reference a
        specific iota, a place in the list where your last request left off.
        They help us avoid loading an entire set (or a thousand) just to give
        you your next slice.
      </p>

      <p>
        A cursor-paginated method returns two things: a portion of the total set
        of results, and a cursor that points to the next portion of the results.
      </p>

      <p>
        <b>
          Cursor-based pagination is spreading across the platform quickly and
          is mandatory on some methods.
        </b>
      </p>
      <p>Please paginate along with us.</p>
    </div>
    <div>
      <h2>Walkthrough</h2>
      <Sandbox />
    </div>
    <div>
      <h3>Common attributes of cursor-based pagination method parameters</h3>
      <table>
        <tr>
          <th>Parameters</th>
          <th>Description</th>
          <th>Default value </th>
          <th>Errors </th>
          <th>Recommendations</th>
        </tr>
        <tr>
          <td>
            <code>cursor</code>
          </td>
          <td>
            A unique encoded string that serves as a pointer to the next batch
            of results
          </td>
          <td>The default value is first page</td>
          <td>
            <code>invalid_cursor</code>
          </td>
          <td>Do not persist for days! </td>
        </tr>
        <tr>
          <td>
            <code>limit</code>
          </td>
          <td>
            A number that tells your method how many results you want per call
            of the method
          </td>
          <td>You must give a limit </td>
          <td>
            If you exceed the maximum value of the method (usually 1000), the
            response object will automatically set the parameter as the maximum
          </td>
          <td>100-200 per call </td>
        </tr>
      </table>
      <p>
        We're adding cursor-based pagination to almost every collection-yielding
        method. Today, cursor-based pagination is supported by these methods:
      </p>
      <ul>
        <li>
          <code>conversations.history</code>
        </li>
        <li>
          <code>conversations.list</code>
        </li>
        <li>
          <code>conversations.members</code>
        </li>
        <li>
          <code>conversations.replies</code>
        </li>
        <li>
          <code>files.info</code>
        </li>
        <li>
          <code>reactions.list</code>
        </li>
        <li>
          <code>stars.list</code>
        </li>
        <li>
          <code>users.list</code>
        </li>
        <li>
          <code>channels.list</code> (deprecated){" "}
        </li>
        <li>
          <code>groups.list</code> (deprecated){" "}
        </li>
        <li>
          <code>im.list</code> (deprecated)
        </li>
        <li>
          <code>mpim.list</code> (deprecated)
        </li>
      </ul>
      <p>
        Please note that when you are trying to page through{" "}
        <code>channels.list</code>, the <code>exclude_members</code> argument
        won't work too well with pagination at this time. Channels with very
        large memberships and teams with many channels may cause the method to
        throw <code>HTTP 500</code> errors. Please exclude memberships with{" "}
        <code>exclude_members</code> and look them up atomically with
        <code>channels.info</code> instead.
      </p>
      <h2>Overview: classic approches to pagination</h2>
      <p>
        You'll find a variety of other pseudo and real pagination schemes
        through a few other Web API methods.
      </p>

      <p>Each of those API methods detail their pagination strategy.</p>
      <h3>Traditional paging</h3>

      <p>
        These methods use some form of archaic numeric-based page and count or
        other limiting parameters.
      </p>
      <ul>
        <li>
          <code>files.list</code>
        </li>
        <li>
          <code>search.all</code>
        </li>
        <li>
          <code>search.files</code>
        </li>
        <li>
          <code>Search.messages</code>
        </li>
      </ul>

      <h3>Timeline methods</h3>
      <p>
        These methods are more positional than page oriented and allow you to
        navigate through time with oldest, latest, and a special inclusive
        parameter.
      </p>

      <p>They're all deprecated too!</p>
      <ul>
        <li>
          <code>channels.history</code>
        </li>
        <li>
          <code>groups.history</code>
        </li>
        <li>
          <code>im.history</code>
        </li>
        <li>
          <code>mpim.history</code>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
