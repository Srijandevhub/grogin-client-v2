import Header from "../components/header/Header"
import { UserProvider } from "../context/userContext"

const UserLayout = ({ children }) => {
    return (
        <UserProvider>
            <Header />
            { children }
        </UserProvider>
    )
}

export default UserLayout