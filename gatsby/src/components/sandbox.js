import React from "react"
//import WalkThrough from "./walkthrough" //I think these should be styled now
//import Params from "./params"
//import Code from "./code"
import {StaticQuery, graphql} from "graphql"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Sandbox = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <div>
        <p>
          <StaticQuery query={graphql`
          query {
            markdownRemark(frontmatter: { slug: { eq: "scenario1a" } }) {
              html
              frontmatter {
                slug
              }
            }
          }
          `} />
          When accessing the first virtual page of a paginated collection — for
          instance making a `users.list` request for the first time — you'll
          receive a `response_metadata` attribute containing a cursor for your
          next request. Cursor-paginated methods accept `cursor` and `limit`
          parameters. If you don't pass a `cursor` parameter, but do pass a
          `limit` parameter, the default value retrieves the first portion (or
          "page") of results. Here's an example request to `users.list`, where
          we limit our list of users to 2 users per "page", making it easier to
          test on a workspace with a low number of users. In return, we get the
          first "page" of a typical `users.list` response, limited to 2 results.
        </p>
      </div>
      <div>
        <p>
          Skip down to the bottom field of each user entry to see the
          `response_metadata`, containing `cursor` information on the next page
          of results. Within `response_metadata` you'll note `next_cursor`, a
          string pointing at the next page of results. To retrieve the next page
          of results, provide this value as the `cursor` parameter to the
          paginated method. **(Cursor strings typically end with the =
          character. When presenting this value as a URL or POST parameter, it
          must be encoded as %3D.)**
        </p>

        <p>code example</p>
      </div>
      <div>
        scenario2
        <p>
          On our next call to the same method, we set the `cursor` parameter
          equal to the `next_cursor` value we received on the last request to
          retrieve the next portion of the collection. We issue our request for
          the next page of no more than 2 results like this: `GET
          slack.com/api/users.list?limit=2&cursor=dXNlcjpVMEc5V0ZYTlo%3D&token=xoxp-1234-5678-90123`
          And (*spoiler alert*): we only get one result back. This workspace
          actually only has three users. We've reached the end of our pagination
          journey and there are no more results to retrieve. Our `next_cursor`
          becomes but an empty string: **(An empty, null, or non-existent
          `next_cursor` in the response indicates no further results.)**
        </p>
        <p>code example</p>
      </div>
      <div>
        <p>
          Now that we've paid all sort of attention to the `cursor` paramater,
          let's think about the `limit` parameter. As you probably recall, the
          `limit` parameter sets a maximum number of results to return per call.
          Provide sensible limit values. We recommend 100-200 results at a time.
        </p>
      </div>
      <div>
        <p>
          Now, let's say you've decided to be a bit less sensible - no problem!
          Invalid `limit` values are currently magically adjusted to something
          sensible. The `limit` parameter maximum is usually 1000, though
          subject to change and may vary per method. Of course, we recommend
          providing reasonable values for best results, as with most parameters.
        </p>
      </div>
      <div>
        <p>
          One more thing to watch out for with the `limit` parameter: It's
          possible to receive fewer results than your specified limit, even when
          there are additional results to retrieve. Avoid the temptation to
          check the size of results against the limit to conclude the results
          have been completely returned. Instead, check the `next_cursor` value
          in the `response_metadata` object to make sure that it's empty, null,
          or non-existent.
        </p>
      </div>
      <div>
        <p>
          Now that we've talked about your options, let's talk about what can go
          wrong - Currently, the only error specific to pagination that you
          might encounter is: `invalid_cursor` - Returned when navigating a
          paginated collection and providing a cursor value that just does not
          compute — either it's gibberish, somehow encoded wrong, or of too
          great a vintage.
        </p>
      </div>
      <div>
        <p>
          And one final note: Cursors expire and are meant to be used within a
          reasonable amount of time. You should have no trouble pausing between
          [rate limiting](https://api.slack.com/docs/rate-limits) windows, but
          do not persist cursors for hours or days. Enhanced rate limiting
          conditions are provided when using cursor-based pagination.{" "}
        </p>
      </div>
    </Slider>
  )
}

export default Sandbox
