import styles from './MyCssModule.module.css';

const MyCssModule = () => {
    return (
        <>
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">My CssModule!</span>
        </div>
        <div className={[styles.wrapper, styles.inverted].join(' ')}>
            안녕하세요, 저는 <span className="something">My CssModule!</span>
        </div>
        </>
    );
};

export default MyCssModule;