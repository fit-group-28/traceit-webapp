import styles from './loading.module.css';
import * as AiIcons from "react-icons/ai";

const AiOutlineLoading3Quarters = AiIcons.AiOutlineLoading3Quarters

export default function Loading(props) {
    const { children, loading, ...restProps } = props;


    if (!loading && children) {
        return children;
    }

    if (children) {
        const { style, ...otherProps } = restProps;
        return (
            <div style={{ position: 'relative', width: '100%', height: '100%', ...style }} {...otherProps}>
                <div className={styles['loading-container']}>
                    <AiOutlineLoading3Quarters className={styles.spinner} />
                </div>
                {children}
            </div>
        )
    }

    return (
        <AiOutlineLoading3Quarters {...restProps} />
    )
}