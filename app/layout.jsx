import '@/assets/styles/globels.css';

export const metedata = {
    title: 'Property Pluse',
    keywords: 'rental, property, real estate',
    description: 'FInd the perfect rental property',
};

const MainLayout = ( { children}) => {
    return ( 
        <html>
            <body>
                <main> {children} </main>
            </body>
        </html>
     );
}
 
export default MainLayout;