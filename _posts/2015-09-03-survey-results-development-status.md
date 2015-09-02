---
title: Survey results, development status
author: Jonas Platte
layout: post
---

So, I guess we need a quick introduction for this new blog! This will from now on be the
place to find development news, and probably some other stuff about Cyvasse Online. These
things will of course still be posted about on Social Media sites and our new
[subreddit][], but a bit more space for longer articles like this one, and a managable
archive for development updates, seems like a good thing to have.

[subreddit]: https://www.reddit.com/r/CyvasseOnline/

*__Note:__ For lack of a better solution, you'll have to "click" / tap images (accessing
the files directly) if you want to be able to read the text on them on a small screen.*

But enough with the introduction! Until not long ago, we've had a user survey around.
The link actually stayed on our main page for longer than I intended it to initially,
because there were so few people answering it that whenever I thought about closing it,
it just seemed like there weren't enough answers yet. After finally deciding to close it,
we had 15 useful responses. That's not much, but the answers were helpful nevertheless.
Here are the results of the first question:

[![What's your general opinion on our website?](/img/survey-1.png)][img1]

[img1]: /img/survey-1.png

<!-- more -->

I think it's simply nice to see that nobody picked the "Seriously needs improvement"
option, but this is obviously not the most revealing set of answers. For "Other", two
people wrote that they had technical problems with the site, one stated they just
couldn't play at all because they had nobody to play with. On to the next diagram!

[![How do these possible new features sound to you?](/img/survey-2.png)][img2]

[img2]: /img/survey-2.png

We have a very clear most preferred feature! I wouldn't have expected every single
person answering the survey to care about having a bot to play against, but I would
happily make that my top priority... If the current game client (the visible part of the
game that runs in your browser) wouldn't be such a nightmare to work with.

I have started pretty much from scratch with the new implementation, and by the time of
writing, there's not much done yet, but this means that the next update, although not
adding a bot, will be a big one. Here's a rough outline of what will change:

* The game will look better ([probable new board look][NewBoard] – colors might change)
* It will download much faster
* CPU load and memory usage will drop significantly, both are ridiculously high currently

At this point I should probably mention that all the code that makes up the games
functionality still was only written by me alone. It would be really nice if this
changed, so if you're a programmer, have some free time and are interested in Cyvasse,
please check out my corresponding [post on reddit][].

[NewBoard]: /img/board.svg
[post on reddit]: https://www.reddit.com/r/CyvasseOnline/comments/3jaqd0/help_wanted/

To quickly get back to the potential new features: Apart from the bot that will be the
top priority after the client rewrite, I'm pretty certain I will implement both the
interactive tutorial and the notifications. I am pretty sure the latter simply got "Eww.
Don't do that" twice because it wasn't "**Optional** notifications". I won't make your
browser play sound whenever something happens in the game without leaving you an option
to disable it (if it will be enabled by default at all). Next diagram!

[![Did you experience any of these problems?](/img/survey-3.png)][img3]

[img3]: /img/survey-3.png

The answers to this question are pretty self-explanatory, so this is all of questions
about the game and website done! There's still one thing to look at though: The last,
optional question about monetization:

[![What do you think about the following monetization options?](/img/survey-4.png)][img4]

[img4]: /img/survey-4.png

So... I don't really know why I had "Ads (no thematic restriction)" in there... I hate
these kind of ads on sites like Facebook, I wouldn't really do this anyway. But it is
nice to see that ads that are actually relevant to our users are accepted by almost
everybody.

Like you might have noticed, we already have a Cyvasse-related ad, but only on this blog
(if you're on mobile, the sidebar it is in is at the bottom of the page). I intend to
keep that ad exclusive to the blog for now and see how you all respond to it, and will
consider putting it on the main page at a later point.

As far as donations go: I don't see a reason not enable donations. It might take some
time to find the right platform(s) to use for this though, which is why there is no
donate button anywhere yet.

That's it for now, thanks for reading! :)
