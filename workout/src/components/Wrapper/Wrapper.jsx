import styles from './Wrapper.module.scss';
import { useTheme } from '../../context/ThemeContext';

const Wrapper = ({ children }) => {
  const {wrapper, light, toggleThemeBtn} = styles;
  const { darkMode, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return <>
      <button className={toggleThemeBtn} onClick={handleClick}>Toggle theme</button>
      <div className={darkMode ? `${wrapper} dark` : `${wrapper} ${light}`}>{ children }</div>
  </>
}

export default Wrapper