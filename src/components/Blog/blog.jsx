import React, { useState } from 'react';
import './blog.css';

// Blog Images
import wso2Image from './WSO2.png';
// import uiuxImage from '../../assets/blog/uiux-design.jpg';
// import iotImage from '../../assets/blog/iot-projects.jpg';
// import portfolioImage from '../../assets/blog/portfolio.jpg';
// import webImage from '../../assets/blog/responsive-web.jpg';
// import roboticsImage from '../../assets/blog/robotics.jpg';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    /*
    |--------------------------------------------------------------------------
    | BLOG POSTS
    |--------------------------------------------------------------------------
    | Add new posts to this array.
    |
    | category options:
    | Web Development
    | UI/UX
    | Integration
    | IoT
    | Robotics
    | Personal
    |--------------------------------------------------------------------------
    */

    const blogPosts = [
        {
            id: 1,
            slug: 'wso2-micro-integrator',
            title: 'The Unglamorous WSO2 Product That Actually Keeps Companies Running',

            excerpt:
                'Enterprise systems rarely live in isolation. A closer look at WSO2 Micro Integrator and the unglamorous integration layer that keeps legacy systems, APIs, microservices and business workflows connected.',

            category: 'Integration',

            date: 'September 17, 2026',

            readTime: '8 min read',

            image: wso2Image,

            featured: true,

            content: `
Whenever people talk about WSO2, the conversation tends to gravitate toward the shiny stuff — API gateways, AI traffic, agent identity.

Nobody posts about the thing that's quietly been holding enterprise IT together for two decades: integration.

So I wanted to actually look into WSO2's Micro Integrator, because it turns out to be one of those unglamorous products that solves a problem almost every company runs into eventually.

Here's the problem in plain terms.

Big companies don't run on one clean, modern system. They run on a mess — a 15-year-old mainframe handling billing, a SaaS CRM the sales team picked without asking IT, a couple of internal microservices someone built last year, and a file server that nobody's allowed to touch because "it just works."

None of these things were designed to talk to each other.

And yet the business needs them to.

An order placed on the website needs to update the old inventory system, trigger a message to the shipping vendor's API, and land in the CRM, all without someone manually copying data between screens.

That's the job an integration platform does, and it's the reason WSO2's Enterprise Integrator — and its lightweight runtime, the Micro Integrator — has existed since 2005, back when it was still called WSO2 ESB.

What struck me looking into it is that the product hasn't tried to pretend legacy systems don't exist, which a lot of "modern" tooling quietly does.

It's explicitly built for what WSO2 calls "brownfield" integration — connecting old, established systems to new microservices-based ones — while also being lightweight and cloud-native enough to run comfortably in a Kubernetes environment if that's where a company's newer stuff lives.

It comes with something like a hundred pre-built connectors for common systems, so integrating with, say, Salesforce or an SAP system doesn't mean writing that connection logic from scratch every time.

It's also not just one thing.

It runs as an Enterprise Service Bus for message transformation and routing, as a message broker over AMQP for cases where something doesn't need an instant response, and it has a business-process profile for workflows that involve actual human steps — approvals, sign-offs, the parts of a business process that can't be fully automated.

Instead of buying three separate tools for three separate needs, it's one platform that flexes across all of them.

The developer experience side is worth mentioning too, mostly because it's evolved in a direction that matches how most engineers actually want to work now.

It's config-driven rather than requiring you to hand-write everything, there's a graphical tool (Integration Studio) for building integrations visually, and more recent releases have added things like a VS Code extension and a runtime diagnostic tool — small quality-of-life additions, but the kind that add up when you're the person actually maintaining these integrations at 2am when something breaks.

None of this is the kind of feature that makes headlines.

Nobody writes an excited tweet about a message broker.

But it's worth remembering that most of what makes a modern digital business actually function isn't the app the customer sees — it's the plumbing behind it that makes sure the order, the payment, the inventory update, and the shipping notification all actually happen in the right order, reliably, every single time.

Get that wrong and customers notice immediately, even if they never know why.

That's really the case for a product like this.

It's not exciting.

It's just the thing that has to work.
            `,

            sources:
                'WSO2 Micro Integrator and Enterprise Integrator documentation and release notes (GitHub, wso2.com, getapp.com)'
        },

        {
            id: 2,
            slug: 'modern-react-websites',

            title: 'Building Modern Websites with React',

            excerpt:
                'A practical look at how I approach building responsive, scalable and maintainable websites using React.',

            category: 'Web Development',

            date: 'August 28, 2026',

            readTime: '5 min read',

            image: webImage
        },

        {
            id: 3,
            slug: 'ui-ux-design-approach',

            title: 'My Approach to UI/UX Design',

            excerpt:
                'Good design is more than making an interface look attractive. Here is how I turn ideas into simple and meaningful user experiences.',

            category: 'UI/UX',

            date: 'August 15, 2026',

            readTime: '4 min read',

            image: uiuxImage
        },

        {
            id: 4,
            slug: 'getting-started-with-iot',

            title: 'Getting Started with IoT Projects',

            excerpt:
                'Exploring the basics of IoT development, sensors, microcontrollers and connecting physical devices to software.',

            category: 'IoT',

            date: 'July 30, 2026',

            readTime: '6 min read',

            image: iotImage
        },

        {
            id: 5,
            slug: 'building-my-portfolio',

            title: 'What I Learned Building My Portfolio',

            excerpt:
                'Lessons learned while designing and developing my personal portfolio as a software engineering student.',

            category: 'Personal',

            date: 'July 18, 2026',

            readTime: '3 min read',

            image: portfolioImage
        },

        {
            id: 6,
            slug: 'responsive-interface-design',

            title: 'Making Responsive Interfaces',

            excerpt:
                'A few practical techniques I use to make websites work smoothly across desktops, tablets and mobile devices.',

            category: 'Web Development',

            date: 'July 10, 2026',

            readTime: '5 min read',

            image: webImage
        },

        {
            id: 7,
            slug: 'software-and-robotics',

            title: 'Exploring Robotics & Software',

            excerpt:
                'How software engineering connects with robotics and why I am interested in building intelligent physical systems.',

            category: 'Robotics',

            date: 'July 05, 2026',

            readTime: '7 min read',

            image: roboticsImage
        }
    ];

    /*
    |--------------------------------------------------------------------------
    | CATEGORIES
    |--------------------------------------------------------------------------
    */

    const categories = [
        'All',
        'Web Development',
        'UI/UX',
        'Integration',
        'IoT',
        'Robotics',
        'Personal'
    ];

    /*
    |--------------------------------------------------------------------------
    | FILTER POSTS
    |--------------------------------------------------------------------------
    */

    const filteredPosts =
        activeCategory === 'All'
            ? blogPosts
            : blogPosts.filter(
                  (post) => post.category === activeCategory
              );

    /*
    |--------------------------------------------------------------------------
    | OPEN ARTICLE
    |--------------------------------------------------------------------------
    |
    | For now this opens the article in a browser-style page using the
    | current URL.
    |
    | Later you can replace this with React Router.
    |
    |--------------------------------------------------------------------------
    */

    const handleReadArticle = (post) => {
        if (post.content) {
            window.history.pushState(
                {},
                '',
                `/blog/${post.slug}`
            );

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            alert(
                'Article page can be connected here using React Router.'
            );
        }
    };

    return (
        <section
            className="blog-section"
            id="blog"
        >
            <div className="blog-container">

                {/* =====================================================
                    BLOG HEADER
                ====================================================== */}

                <div className="blog-header">

                    <span className="blog-label">
                        MY BLOG
                    </span>

                    <h1>
                        Thoughts, Ideas &
                        <span> Experiences</span>
                    </h1>

                    <p>
                        I write about software development,
                        web technologies, UI/UX, integration,
                        IoT, robotics and things I learn while
                        building digital products.
                    </p>

                </div>


                {/* =====================================================
                    CATEGORY FILTER
                ====================================================== */}

                <div className="blog-filters">

                    {categories.map((category) => (

                        <button
                            key={category}
                            className={
                                activeCategory === category
                                    ? 'filter-btn active'
                                    : 'filter-btn'
                            }
                            onClick={() =>
                                setActiveCategory(category)
                            }
                        >
                            {category}
                        </button>

                    ))}

                </div>


                {/* =====================================================
                    FEATURED ARTICLE
                ====================================================== */}

                {activeCategory === 'All' && (

                    <article className="featured-post">

                        {/* Image */}

                        <div className="featured-image">

                            <img
                                src={blogPosts[0].image}
                                alt={blogPosts[0].title}
                            />

                            <div className="featured-overlay"></div>

                            <span className="featured-badge">
                                FEATURED ARTICLE
                            </span>

                        </div>


                        {/* Content */}

                        <div className="featured-content">

                            <span className="post-category">
                                {blogPosts[0].category}
                            </span>

                            <h2>
                                {blogPosts[0].title}
                            </h2>

                            <p>
                                {blogPosts[0].excerpt}
                            </p>


                            <div className="post-meta">

                                <span>
                                    {blogPosts[0].date}
                                </span>

                                <span>
                                    •
                                </span>

                                <span>
                                    {blogPosts[0].readTime}
                                </span>

                            </div>


                            <button
                                className="read-more"
                                onClick={() =>
                                    handleReadArticle(
                                        blogPosts[0]
                                    )
                                }
                            >
                                <span>
                                    Read Article
                                </span>

                                <span className="arrow">
                                    ↗
                                </span>
                            </button>

                        </div>

                    </article>

                )}


                {/* =====================================================
                    BLOG GRID
                ====================================================== */}

                <div className="blog-grid">

                    {filteredPosts
                        .filter(
                            (post) =>
                                activeCategory !== 'All' ||
                                post.id !== 1
                        )
                        .map((post) => (

                            <article
                                className="blog-card"
                                key={post.id}
                            >

                                {/* Card Image */}

                                <div className="card-image">

                                    <img
                                        src={post.image}
                                        alt={post.title}
                                    />

                                    <span className="card-category">
                                        {post.category}
                                    </span>

                                </div>


                                {/* Card Content */}

                                <div className="card-content">

                                    <div className="card-meta">

                                        <span>
                                            {post.date}
                                        </span>

                                        <span>
                                            •
                                        </span>

                                        <span>
                                            {post.readTime}
                                        </span>

                                    </div>


                                    <h3>
                                        {post.title}
                                    </h3>


                                    <p>
                                        {post.excerpt}
                                    </p>


                                    <button
                                        className="card-link"
                                        onClick={() =>
                                            handleReadArticle(
                                                post
                                            )
                                        }
                                    >
                                        <span>
                                            Read More
                                        </span>

                                        <span className="card-arrow">
                                            →
                                        </span>
                                    </button>

                                </div>

                            </article>

                        ))}

                </div>


                {/* =====================================================
                    EMPTY STATE
                ====================================================== */}

                {filteredPosts.length === 0 && (

                    <div className="empty-blog">

                        <div className="empty-icon">
                            ✦
                        </div>

                        <h3>
                            No posts found
                        </h3>

                        <p>
                            New articles will be added
                            here soon.
                        </p>

                    </div>

                )}


                {/* =====================================================
                    CTA
                ====================================================== */}

                <div className="blog-cta">

                    <div className="cta-content">

                        <span className="cta-label">
                            KEEP EXPLORING
                        </span>

                        <h2>
                            Curious about what
                            I'm building?
                        </h2>

                        <p>
                            Explore my projects, experiments
                            and the things I'm working on.
                        </p>

                    </div>


                    <a
                        href="#works"
                        className="cta-button"
                    >
                        <span>
                            View My Work
                        </span>

                        <span>
                            ↗
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Blog;