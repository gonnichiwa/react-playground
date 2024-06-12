import React from 'react';
import { useParams } from 'react-router-dom';


const data = {
    jin : {
        name: 'jinjin',
        description: 'good guy'
    },
    phikal: {
        name: '알렉산더슐긴',
        description: 'phikal저자'
    }
};

const Profile = () => {
    const params = useParams();            // react-router-dom 기능인 useParams()를 써서
    const profile = data[params.username]; // url '/Profile/jin 아니면 '/Profile/phikal' 일 때 정보 가져오도록 함
    return (
        <div>
            <h1>유저 프로필</h1>
            { profile? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필 입니다.</p>
            )};
        </div>
    );
};

export default Profile;