import React from "react"
//import WalkThrough from "./walkthrough" //I think these should be styled now
//import Params from "./params"
//import Code from "./code"
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
          When accessing the first virtual page of a paginated collection — for
          instance making a <code>users.list</code> request for the first time —
          you'll receive a <code>response_metadata</code> attribute containing a
          cursor for your next request. Cursor-paginated methods accept{" "}
          <code>cursor</code> and <code>limit</code>
          parameters. If you don't pass a <code>cursor</code>parameter, but do
          pass a<code>limit</code> parameter, the default value retrieves the
          first portion (or "page") of results. Here's an example request to{" "}
          <code>users.list</code> , where we limit our list of users to 2 users
          per "page", making it easier to test on a workspace with a low number
          of users. In return, we get the first "page" of a typical{" "}
          <code>users.list</code> response, limited to 2 results.
        </p>
      </div>
      <div>
        <p>
          Skip down to the bottom field of each user entry to see the
          <code>response_metadata</code>, containing <code>cursor</code>{" "}
          information on the next page of results. Within{" "}
          <code>response_metadata</code> you'll note <code>next_cursor</code> ,
          a string pointing at the next page of results. To retrieve the next
          page of results, provide this value as the <code>cursor</code>{" "}
          parameter to the paginated method.
          <br></br>
          <p>
            <b>
              (Cursor strings typically end with the = character. When
              presenting this value as a URL or POST parameter, it must be
              encoded as %3D.)
            </b>
          </p>
        </p>
        <p>code example</p>
      </div>
      <div>
        <p>
          On our next call to the same method, we set the <code>cursor</code>{" "}
          parameter equal to the <code>next_cursor</code> value we received on
          the last request to retrieve the next portion of the collection. We
          issue our request for the next page of no more than 2 results like
          this:
        </p>
        <br></br>
        <code>
          GET
          slack.com/api/users.list?limit=2&cursor=dXNlcjpVMEc5V0ZYTlo%3D&token=xoxp-1234-5678-90123
        </code>
        <br></br>
        <p>
          And (<i>spoiler alert</i>): we only get one result back. This
          workspace actually only has three users. We've reached the end of our
          pagination journey and there are no more results to retrieve. Our{" "}
          <code>next_cursor</code>
          becomes but an empty string:
        </p>
        <p>
          <b>
            (An empty, null, or non-existent
            <code>next_cursor</code> in the response indicates no further
            results.)
          </b>
        </p>
        <p>code example</p>
      </div>
      <div>
        <p>
          Now that we've paid all sort of attention to the <code>cursor</code>{" "}
          paramater, let's think about the <code>limit</code> parameter. As you
          probably recall, the
          <code>limit</code> parameter sets a maximum number of results to
          return per call. Provide sensible limit values. We recommend 100-200
          results at a time.
        </p>
      </div>
      <div>
        <p>
          Now, let's say you've decided to be a bit less sensible - no problem!
          Invalid <code>limit</code> values are currently magically adjusted to
          something sensible. The <code>limit</code> parameter maximum is
          usually 1000, though subject to change and may vary per method. Of
          course, we recommend providing reasonable values for best results, as
          with most parameters.
        </p>
      </div>
      <div>
        <p>
          One more thing to watch out for with the <code>limit</code> parameter:
          It's possible to receive fewer results than your specified limit, even
          when there are additional results to retrieve. Avoid the temptation to
          check the size of results against the limit to conclude the results
          have been completely returned. Instead, check the{" "}
          <code>next_cursor</code> value in the <code>response_metadata</code>{" "}
          object to make sure that it's empty, null, or non-existent.
        </p>
      </div>
      <div>
        <p>
          Now that we've talked about your options, let's talk about what can go
          wrong - Currently, the only error specific to pagination that you
          might encounter is: <code>invalid_cursor</code> - Returned when
          navigating a paginated collection and providing a cursor value that
          just does not compute — either it's gibberish, somehow encoded wrong,
          or of too great a vintage.
        </p>
      </div>
      <div>
        <p>
          And one final note: Cursors expire and are meant to be used within a
          reasonable amount of time. You should have no trouble pausing between 
          <a href="https://api.slack.com/docs/rate-limits">
            rate limiting
          </a> 
          windows, but do not persist cursors for hours or days. Enhanced rate
          limiting conditions are provided when using cursor-based pagination.
        </p>
      </div>
    </Slider>
  )
}

export default Sandbox;
