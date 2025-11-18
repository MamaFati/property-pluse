import Navbar from '@/components/Navbar';
import Footer from '@/components/footer'
import '@/assets/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/components/AuthProvider';
import GlobalProvider from '@/context/GlobalContext';
import 'photoswipe/dist/photoswipe.css';


export const metedata = {
    title: 'Property Pluse',
    keywords: 'rental, property, real estate',
    description: 'FInd the perfect rental property',
};

const MainLayout = ( { children}) => {
    return (
      <AuthProvider>
        <GlobalProvider>
          <html>
            <body>
              <Navbar />
              <main> {children} </main>
              <Footer />
              <ToastContainer />
            </body>
          </html>
        </GlobalProvider>
      </AuthProvider>
    );
}
 
export default MainLayout;