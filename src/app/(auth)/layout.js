import Navbar from "@/components/Navbar";

const AuthLayout = ({children}) => {
    return (
        < main className=" container mx-auto">
            <Navbar></Navbar>
            {children}
        </main>
    );
};

export default AuthLayout;