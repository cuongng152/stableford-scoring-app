import {Outlet} from 'react-router-dom'
import Layout from "../layout";
import styles from "../layout/layout.module.scss";
import {SimpleAccordion} from "../components";
import {useEffect} from "react";

const InitializationRoute = () => {
    useEffect(() => {
        localStorage.setItem('data', '')
    }, [])
    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <h4 className={`text-semi-bold font-black-1 text-center text-lg-start`}>
                    Welcome back Charlie!
                </h4>
                <p className={'text-semi-bold font-black-1 text-center text-lg-start'}>
                    Here are all the courses you have played. Click to see the details.
                </p>
                <SimpleAccordion />
            </div>
            <Outlet />
        </Layout>
    )
}

export default InitializationRoute
