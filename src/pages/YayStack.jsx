import React from 'react';
import Layout from "../components/layout";
import SummaryReport from '../images/pdf/yaystack_usability_testing_summary_report_compressed.pdf';
import ScriptGuide from '../images/pdf/yaystack_usability_testing_script_compressed.pdf';

const YayStack = () => {

    /*
    https://thumbnails-photos.amazon.com/v1/thumbnail/whR6DYFsRKm2WfUgj7Yipg?viewBox=512%2C512&ownerId=A1VFC1KOR2FJO4

    https://thumbnails-photos.amazon.com/v1/thumbnail/PWn5it42RruyAgj0ZRUTqA?viewBox=216%2C354&ownerId=A1VFC1KOR2FJO4

    https://thumbnails-photos.amazon.com/v1/thumbnail/uezoudBwRL-uBqIqYVteIg?viewBox=263&ownerId=A1VFC1KOR2FJO4

    https://thumbnails-photos.amazon.com/v1/thumbnail/JPdSIhzITmCMPZCzf44yDQ?viewBox=1228%2C849&ownerId=A1VFC1KOR2FJO4

    https://thumbnails-photos.amazon.com/v1/thumbnail/l3UqocTfRbmx2rHKg-ECmw?viewBox=1256%2C849&ownerId=A1VFC1KOR2FJO4

    https://thumbnails-photos.amazon.com/v1/thumbnail/dowdxJPrTIuVd0WEb60yWA?viewBox=1170%2C849&ownerId=A1VFC1KOR2FJO4




    */

    return (
        <Layout>
            <div className="yaystack-page">
                <h2>Yaystack</h2>
                <section id="title">
                    <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/whR6DYFsRKm2WfUgj7Yipg?viewBox=512%2C512&ownerId=A1VFC1KOR2FJO4" alt="yaystack logo" />
                    <div>
                        <h3>Yaystack is an app where you find recommendations and deals from your friends.</h3>
                        <h3>“The best finds from your best friends. Yaystack is a social network for referrals and recommendations.”</h3>
                        <h3>Users will post recommendations for their favorite goods and services, and once shared, will activate deals.</h3>
                    </div>
                </section>

                <section id="role">
                    <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/uezoudBwRL-uBqIqYVteIg?viewBox=263&ownerId=A1VFC1KOR2FJO4" alt="smiley nerd" />
                    <div>
                        <h3>My Role</h3>
                        <p>UX Designer Consultant</p>

                        <h3>Goal</h3>
                        <p>Conduct Usability Testing on beta before product launch</p>
                    </div>
                    <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/PWn5it42RruyAgj0ZRUTqA?viewBox=216%2C354&ownerId=A1VFC1KOR2FJO4" alt="yaystack app" />
                </section>

                <section id="scripts">
                    <h3>Usabilty Test Script Guide</h3>
                    <a href={ScriptGuide} download>
                        <p>Read full script</p>
                        <div>
                            <img src="https://www.amazon.com/drive/v1/nodes/c0T_ZDpIS5ybjaoruiKaHg/contentRedirection?querySuffix=%3FviewBox%3D715%2C849&ownerId=A1VFC1KOR2FJO4&cb=1587230550790" alt="script page 1"/>
                            <img src="https://www.amazon.com/drive/v1/nodes/S1KA39xfRhuW7CX4eEBCtA/contentRedirection?querySuffix=%3FviewBox%3D708%2C849&ownerId=A1VFC1KOR2FJO4&cb=1587230551239" alt="script page 2"/>
                        </div>
                    </a>

                </section>

                <section id="testing">
                    <h3>Testing & Key Findings</h3>
                    <ul>
                        <li>Lack of Clarity on Product Information
                            <ul>
                                <li>the users wanted to be able to click on the image for more information on the products, services, experiences</li>
                                <li>few posts had links</li>
                                <li>the home page seemed unorganized and it was unclear if posts were from people they were following</li>
                            </ul>
                        </li>
                        <li>Lack of Search Options Create Difficulity Navigating
                            <ul>
                                <li>no way to search for specific items</li>
                                <li>no search by location</li>
                            </ul>
                        </li>
                        <li>Lack of Confirmation of Actions
                            <ul>
                                <li>users wanted confirmation after posting recommendations</li>
                                <li>it is confusing, when adding (inviting) a friend, that the entire slide up menu pulled up</li>
                                <li>a confirmation after sending text invite was wanted, it was unclear if invitation was successfully sent</li>
                            </ul>
                        </li>
                        <li>Trust
                            <ul>
                                <li>all 3 users would trust a recommendation from a friend</li>
                                <li>2 out of 3 users would not trust a recommendation from an “influencer” or person of status on social media</li>
                            </ul>
                        </li>
                    </ul>

                    <div>
                        <figure>
                            <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/JPdSIhzITmCMPZCzf44yDQ?viewBox=1228%2C849&ownerId=A1VFC1KOR2FJO4" alt="user 1 testing"/>
                            <figcaption>User 1: Full Stack Web Developer</figcaption>
                        </figure>
                        <figure>
                            <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/l3UqocTfRbmx2rHKg-ECmw?viewBox=1256%2C849&ownerId=A1VFC1KOR2FJO4" alt="user 2 testing"/>
                            <figcaption>User 2: UX Designer, Illustrator</figcaption>
                        </figure>
                        <figure>
                            <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/dowdxJPrTIuVd0WEb60yWA?viewBox=1170%2C849&ownerId=A1VFC1KOR2FJO4" alt="user 3 testing"/>
                            <figcaption>User 3: Software Engineer</figcaption>
                        </figure>
                    </div>
                </section>

                <section id="summary">
                    <h3>Summary Report</h3>
                    <a href={SummaryReport} download>
                        <p>Read full report</p>
                        <img src="https://www.amazon.com/drive/v1/nodes/L1vp6Zf9SJmItHw3TJJyig/contentRedirection?querySuffix=%3FviewBox%3D681%2C849&ownerId=A1VFC1KOR2FJO4&cb=1587230550219" alt="summary report"/>
                    </a>

                </section>
            </div>
        </Layout>
    )

};

export default YayStack;
