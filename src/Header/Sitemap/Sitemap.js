import './Sitemap.css'
export default function Sitemap() {
    return (
        <div className="Sitemap">
            <h1>Sitemap</h1>
            <div>
                A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently. A sitemap tells Google which pages and files you think are important in your site, and also provides valuable information about these files. For example, when the page was last updated and any alternate language versions of the page.
            </div>
            <p>
                You can use a sitemap to provide information about specific types of content on your pages, including video, image, and news content. For example:
            </p>
            <ul>
                <li>A sitemap video entry can specify the video running time, rating, and age-appropriateness rating.</li>
                <li>A sitemap image entry can include the location of the images included in a page.</li>
                <li>A sitemap news entry can include the article title and publication date.</li>
            </ul>

        </div>
    )
}