import ToggleDark from './toggle-dark';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 max-w-7xl mx-auto bg-primary-light dark:bg-primary-dark mb-8 rounded-lg">
      <p>Logo</p>
      <div className="p-1 bg-background-light  rounded-full">
        <ToggleDark />
      </div>
    </header>
  );
};

export default Header;
