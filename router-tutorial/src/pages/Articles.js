import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    }

    return (
        <div>
            <div>
                <Outlet /> {/** Article.js를 보여주는 Outlet, App.js에서 child route한것을 를 여기에 띄움 */}
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/articles/1" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articles/2" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articles/3" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 3</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Articles;