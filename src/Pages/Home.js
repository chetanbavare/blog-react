import Head from "../components/Head"
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination"

const Home = () => {
    return (
        <div>
            <Head/>
            <div>
                <Blogs/>
                <Pagination/>
            </div>
        </div>
    )
}

export default Home