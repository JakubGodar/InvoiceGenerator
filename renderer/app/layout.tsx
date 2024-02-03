import NavBar from "../components/Navbar";
import Providers from "../utils/Providers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <>
    <html>
      <body>
      <Providers>
      <NavBar />
          {children};
      </Providers>
      </body>
    </html>
  </>
}
