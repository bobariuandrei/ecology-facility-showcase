import "./globals.css";
import SectionProgress from "../components/SectionProgress";
import CustomCursor from "../components/CustomCursor";
import MobileNav from "../components/MobileNav";

export const metadata = {
 title: "Ecology Facility",
 description: "Environment Art Showcase"
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return (
 <html lang="en">
  <body>
   <SectionProgress />
   <CustomCursor />
   <MobileNav />
   {children}
  </body>
 </html>
 )
}