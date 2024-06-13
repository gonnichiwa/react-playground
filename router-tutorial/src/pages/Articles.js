import { Link, Outlet } from "react-router-dom";

const Articles = () => {
    return (
        <div>
            <div>
                <Outlet /> {/** Article.js를 보여주는 Outlet, App.js에서 child route한것을 를 여기에 띄움 */}
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/articles/1">게시글 1</Link>
                    </li>
                    <li>
                        <Link to="/articles/2">게시글 2</Link>
                    </li>
                    <li>
                        <Link to="/articles/3">게시글 3</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Articles;