import UserLayout from "../../shared/UserLayout"
import ErrorImage from '../../assets/images/404.png'
const Error404 = () => {
    return (
        <UserLayout>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }} className="py-5">
                    <img src={ErrorImage} alt="error"/>
                    <h1 style={{ textAlign: 'center' }}>That Page Cant Be Found</h1>
                </div>
            </div>
        </UserLayout>
    )
}

export default Error404;