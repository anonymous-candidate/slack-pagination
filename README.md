# pagination revisted

[Here is the full and complete webpage containing the finished first draft of the Pagination page.](https://anonymous-candidate.github.io/slack-pagination/)

*Project Description:*

Two things really caught my eye about the [current Pagination page](https://api.slack.com/docs/pagination): the list of "Just the factoids" immediately prior to the Walkthrough section, which communicates a lot of information about cursor-based pagination methods in the Slack API in an unordered list, and the imbalance between the amount of time spent on cursor-based pagination vs classic pagination styles. 

For me, my project was to really clarify for myself and a potential reader what the main "thesis" of this article was and to integrate clear and dynamic guidance to the reader throughout. Therefore, I took the following steps for this "first draft":

1. I consulted the next-best thing to a Slack SME - the Slack engineering blog. [Reading the post on the introduction of cursor-based pagination](https://slack.engineering/evolving-api-pagination-at-slack-1c1f644f8e12) clarified the language of the Pagination page and gave me my "why": cursor-based pagination is more useful for scalability. (I actually found the distinction between cursor and offset pagination fascinating!) By implication, it also answered my question of why the section on classic pagination styles seemed underdeveloped: Slack was trying to phase them out.

2. I then consulted my hypothetical end-user by skimming through various Stack Oveflow threads about pagination woes using the Slack API. In general, a lot of them were struggling with trying to force cursor-based methods into older styles they understood, or wondering why they couldn't find examples for deprecated methods.

3. This knowledge combined gave me the thesis that guided my rewrite: Slack would like to encourage the skillful use of cursor-based pagination methods while still doing due diligence vis a vis legacy methods.

4. I then came up with a plan: I would rewrite the framing of the article and make all the rich information about cursor-based pagination a more inviting and cohesive experience, while still providing some reference material for key takeaways. I loosely kept track of this using a simple kanban board on Github to try and time-box myself.

5. The process of revision, to summarize, essentially consisted of me using the CMS in my brain to reverse-engineer the current page into sections, reorder them as I saw fit, and rephrase certain parts to provide effective transitions. (You'll see, for example, that I have incorporated the "factoids" into the walkthrough as a whole.) You can see the effects of this process in the file names for the markdown files on this repo. (There are, naturally, more notes in my rough draft.)

In (re-)order, they would be:
- [intro](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/intro.md))
- [cursor-overview](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/cursor-overview.md)
- *walkthrough* [scenario1a](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/scenario1a.md)
- [scenario1b](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/scenario1b.md)
- [example1b](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/example1b.md)
- [scenario2](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/scenario2.md)
- [example2](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/example2.md)
- [scenario3a](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/scenario3a.md)
- [scenario3b](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/scenario3b.md)
- [scenario3c](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/scenario3c.md)
- [scenario4](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/scenario4.md)
- [scenario5](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/scenario5.md) */walkthrough*
- [appendixA](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/appendixA.md)
- [appendixB](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/appendixB.md)
- [classic-overview](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/classic-overview.md)
- [traditional](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/traditional.md)
- [timeline](https://github.com/anonymous-candidate/slack-pagination/blob/master/src/static/resources/timeline.md)

6. The big idea I had for this article was to re-envision the walkthrough as a more interactive tutorial. I wanted information to move horizontally instead of vertically, and I wanted all the different "factoids" to be woven into the walkthrough as different and more cohesive scenarios that could happen when using cursor-based methods. This would be my way to visually and experientially invite the reader to use cursor-based methods. As a nod to the spirit of the "factoids," I wrote a table recapitulating the key details as an "appendix."

7. The "ambitious" version of this walkthrough would include, perhaps, a sandbox where readers could enter different parameters for `cursor` and `limit` and see real output. Given the time constraints, I settled for a rudimentary slider and - having overestimated the flexibility of Gatsby's GraphQL capabilities - some hardcoded HTML text in various React components. Although I make no claims on the completeness of this from a design perspective, I'm hoping it works well enough to give you an idea of what I had in mind. A conceptual "proof of concept," if you will.

8. To conclude, leaving aside the obvious roughness of this draft - I would probably see this effort as a jumping off point for feedback before making a more final draft. Some questions that come to mind if I were on the team would be:

- To what extent would we want to implement these ideas in the current page? I'd love to brainstorm more bite-sized ways to make changes based on the current (to me, unknown) limitations of the documentation site and CMS.
- What would be the time investment needed to pull off the more ambitious interactive vision (playground, more code examples), and is it worth it to the team at this time: if I couldn't be spared to do the coding myself, is there a dev or two who can take the tickets?
- Is my "thesis" clear - I'd welcome any suggestions in making it clearer! Also, to what extent does the team and stakeholders agree this is the best emphasis for this page?
- Would it be a good idea to invest some time in some new tutorials? I noticed the linked tutorial lead to a 404. I think an example of React Relay for GraphQL for showing how you can use cursor-based pagination in a more traditional way (as mentioned in the Slack engineering blog post) could be helpful.

Cheers!
