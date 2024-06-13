import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
    return (
        <div>
            <div>
                <Outlet /> {/** Article.js를 보여주는 Outlet, App.js에서 child route한것을 를 여기에 띄움 */}
            </div>
            <div>
                <ul>
                    <ActiveItem id={1}/>
                    <ActiveItem id={2}/>
                    <ActiveItem id={3}/>
                </ul>
            </div>
        </div>
    );
};

const ActiveItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    return (
        <>
            <li>
                <NavLink to={`/articles/${id}`} style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 {id}</NavLink>
            </li>
        </>
    );
}

export default Articles;