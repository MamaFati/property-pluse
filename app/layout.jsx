import Navbar from '@/components/Navbar';
import Footer from '@/components/footer'
import '@/assets/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/components/AuthProvider';


export const metedata = {
    title: 'Property Pluse',
    keywords: 'rental, property, real estate',
    description: 'FInd the perfect rental property',
};

const MainLayout = ( { children}) => {
    return ( 
        <AuthProvider> 
            <html>
                <body>
                    <Navbar />
                    <main> {children} </main>
                    <Footer />
                    <ToastContainer/>
                </body>
            </html>
         </AuthProvider>
     );
}
 
export default MainLayout;