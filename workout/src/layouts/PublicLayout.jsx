import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';

function PublicLayout() {
  return (
    <ThemeProvider>
      <Wrapper>
        <Header />
          <Outlet />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default PublicLayout;