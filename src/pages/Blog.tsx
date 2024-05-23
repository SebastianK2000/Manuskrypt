import '../style/blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
    const categories = [
        "All",
        "Subscription",
        "Android",
        "Survey",
        "App",
        "Articles",
        "Audiobooks",
        "Authors",
        "Bestsellers",
        "Libraries",
        "Blogs",
        "Book box",
        "Read without limit",
        "Free reading",
        "E-books",
        "E-reader",
        "InkBOOK",
        "iPhone/iPad",
        "Kindle",
        "Bookworm Club",
        "Contests",
        "Prolog Magazine",
        "News",
        "Partners",
        "Legimi Platform",
        "PocketBook",
        "PocktBook",
        "Copyrights",
        "Promotions",
        "Rankings",
        "Reviews",
        "Samsung",
        "Legimi Community",
        "Dante Tablet",
        "Week in Legimi",
        "Only in Legimi",
        "Legimi Big 5",
        "Windows 8",
        "Windows Phone",
        "Events",
        "Publishers",
        "Interviews",
        "Previews"
    ];

    const topics = [
        "Exciting New Releases: Dive into the Latest Titles on Manuskrypt!",
        "Special Offers Alert: Check Out the Latest Deals on Manuskrypt!",
        "Author Spotlight: Discover the Talented Writers Behind Manuskrypt's Books!",
        "Enhanced Reading Experience: Explore the Newest Features on Manuskrypt!",
        "Stay Tuned: Exciting Events and Contests Coming Soon to Manuskrypt!",
        "Community Corner: Connect with Fellow Readers on Manuskrypt's Forums!",
        "Behind the Scenes: Explore the Making of Your Favorite Manuskrypt Titles!",
    ];

    return (
        <div className="blog-page">
            <div className="categories">
                <h2>Categories</h2>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index} style={{ cursor: 'pointer' }}>
                            <Link to="/PageNotFound">{category}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="topics">
                <h2>Current News</h2>
                {topics.map((topic, index) => (
                    <div key={index} className="topic-item">
                        <h3>{topic}</h3>
                        <Link to="/PageNotFound">
                            <button className="readMoreButton">Read more</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
