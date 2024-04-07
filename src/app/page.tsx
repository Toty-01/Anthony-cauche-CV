import ButtonDarkMode from "./components/ButtonDarkMode"
import {ThemeProvider as NextThemesProvider} from "next-themes";


export default function Home() {
  return (
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="">
          <div className="d-flex float-end">
            <ButtonDarkMode />
          </div>
          <h1>Pixels Moderna</h1>
          <h2>Mon portfolio</h2>
        </main>
      </NextThemesProvider>
  );
}
