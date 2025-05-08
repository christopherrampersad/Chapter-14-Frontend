import Image from "next/image";
import Link from "next/link";
<img src="/assets/logo.svg" alt="Logo" /> 
import styles from "./index.module.css";

const Logo = (): JSX.Element => {
    return (
        <Link href="/" passHref className={styles.root}>
            <Image
                src="assets/logo.svg"
                alt="Logo: Food Finder"
                sizes="100vw"
                fill
                priority
            />
        </Link>
    );
};

export default Logo;
