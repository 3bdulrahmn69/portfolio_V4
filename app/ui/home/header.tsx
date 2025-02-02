import ToggleDark from './toggle-dark';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 max-w-7xl mx-auto bg-primary-light dark:bg-primary-dark mb-8 rounded-lg">
      <p>Abdulrahman Moussa</p>
      <ToggleDark />
    </header>
  );
};

export default Header;
