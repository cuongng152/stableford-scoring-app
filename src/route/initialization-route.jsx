import {Outlet} from 'react-router-dom'
import Layout from "../layout";

const InitializationRoute = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export default InitializationRoute
