import styles from "./index.module.css";
import Logo from "@/components/header/logo";

// data is resolved to type Data
const Header = (): JSX.Element => {
    return (
        <header className={styles.root}>
            <div className="layout-grid">
                <Logo />
            </div>
        </header>
    );
};

export default Header;