import classNames from 'classnames/bind';
import styles from './MyCssModule.module.css';

const cx = classNames.bind(styles); // styles에서 클래스(.bla) 받아옴

const MyCssModule = (inverted) => {
    return (
        <>
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">My CssModule!</span>
        </div>
        <div className={[styles.wrapper, styles.inverted].join(' ')}>
            안녕하세요, 저는 <span className="something">My CssModule!</span>
        </div>
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">My CssModule!</span>
        </div>
        <div className={cx('wrapper', inverted)}>
            안녕하세요, 저는 <span className="something">My CssModule!</span>
        </div>
        </>
    );
};

export default MyCssModule;