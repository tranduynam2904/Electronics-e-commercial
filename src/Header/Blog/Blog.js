import { Link } from 'react-router-dom'
import './Blog.css'
export default function Blogs() {
    return (
        <div className="blog">
            <h1 style={{ textAlign: 'center', margin: '30px 0px' }}>LATEST BLOG</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src='https://fdn.gsmarena.com/imgroot/news/23/06/apple-macbook-air-15/-1200/gsmarena_001.jpg'></img>
                        <b>05 June 2023</b>
                        <div className='link_blog'>
                            <Link>Apple unveils 15-inch MacBook Air with M2 processor</Link>
                        </div>
                        <p>It happened - the MacBook Air is now available in a highly-anticipated
                            15-inch size. That's 15.3-inch to be precise, and Apple says the new Retina
                            display has 500 nits of brightness and 1 billion colors.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img
                            src='https://eicvs459tys.exactdn.com/wp-content/uploads/2023/04/Acer_Nitro5_Lifestyle_01.tif-custom-900x600.jpg?strip=all&lossy=1&webp=80&avif=80&ssl=1'></img>
                        <b>04 June 2023</b>
                        <div className='link_blog'>
                            <Link>Acer introduced updated of
                                Nitro 5 and Aspire 3 laptops based
                                on AMD Ryzen 7000 series
                            </Link>
                        </div>
                        <p>The company announced the replenishment of its
                            family of laptops with new models Acer Nitro 5
                            and Aspire 3 on the AMD Ryzen 7000 platform.
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src='https://petapixel.com/assets/uploads/2023/06/macbook-air-featured-800x420.jpg'></img>
                        <b>05 June 2023</b>
                        <div className='link_blog'>
                            <Link>New 15-inch MacBook Air is the World’s Thinnest 15-inch Laptop</Link>
                        </div>
                        <p>At last year’s Worldwide Developer Conference (WWDC),
                            Apple launched new notebooks that used the company’s just-announced M2 processor,
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src='https://assetsio.reedpopcdn.com/razer-deathadder-v3-pro-hero-desktop_BIUmyeN.jpg?width=880&quality=80&format=jpg&auto=webp'></img>
                        <b>05 June 2023</b>
                        <div className='link_blog'>
                            <Link>Razer's ultra-premium ultra-light mouse</Link>
                        </div>
                        <p>The Razer Deathadder V3 Pro is an incredible high-end gaming mouse,
                            but it's expensive at $150 new.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}