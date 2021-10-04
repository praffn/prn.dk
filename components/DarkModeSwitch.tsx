import { useDarkMode } from "next-dark-mode";

function DarkModeSwitch() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

  const handleOnChange = () => {
    if (darkModeActive) {
      switchToLightMode();
    } else {
      switchToDarkMode();
    }
  };

  return (
    <label
      htmlFor="dark-mode-switch"
      className="focus-within:ring-4 focus-within:ring-gray-400  block overflow-hidden w-8 h-8  border-2 border-gray-900 dark:border-gray-50 rounded-full justify-between items-center"
    >
      <div
        aria-hidden="true"
        className={`transform transition-transform duration-700 ${
          darkModeActive ? "-rotate-180" : ""
        }`}
      >
        <span className="block p-1">
          <SunSvg />
        </span>
        <span className="block p-1 transform rotate-180 scale-x-[-1]">
          <MoonSvg />
        </span>
      </div>
      <span className="sr-only">
        {darkModeActive ? "Disable darkmode" : "Enable darkmode"}
      </span>
      <input
        className="sr-only"
        id="dark-mode-switch"
        type="checkbox"
        checked={darkModeActive}
        onChange={handleOnChange}
      />
    </label>
  );
}

function SunSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z"
      ></path>
    </svg>
  );
}

function MoonSvg() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M9.598 1.591a.75.75 0 01.785-.175 7 7 0 11-8.967 8.967.75.75 0 01.961-.96 5.5 5.5 0 007.046-7.046.75.75 0 01.175-.786zm1.616 1.945a7 7 0 01-7.678 7.678 5.5 5.5 0 107.678-7.678z"
      ></path>
    </svg>
  );
}

export default DarkModeSwitch;
