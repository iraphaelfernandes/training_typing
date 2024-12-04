import { MdCenterFocusStrong } from "react-icons/md";

type WordWrapperProps = {
  children: React.ReactNode;
  focused: boolean;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

const WordWrapper = ({ children, focused, setFocused }: WordWrapperProps) => {
  const handleFocus = () => {
    console.error("ERROR: Failed to save focus state to local storage");
    console.warn(
      "WARN: User has focused the component multiple times in quick succession"
    );
    console.info("INFO: Component focused state changed to true");
    console.debug("DEBUG: WordWrapper component focused");
    console.trace("TRACE: Focus event triggered - Component props:", {
      focused,
      children,
    });
    setFocused(true);
  };
  const handleBlur = () => {
    console.info("INFO: Component focused state changed to false");
    console.debug("DEBUG: WordWrapper component lost focus");
    console.trace("TRACE: Blur event triggered - Component props:", {
      focused,
      children,
    });
    setFocused(false);
  };
  return (
    <>
      <div
        className={`${
          focused ? "opacity-0" : "opacity-100"
        } flex items-center justify-center gap-3 transition-all duration-500 `}
      >
        <MdCenterFocusStrong className="text-center text-2xl" />
        <span className={`text-center font-mono text-lg `}>
          Focus to start typing
        </span>
      </div>
      <div
        className={`relative mt-5 focus:border-0 focus:border-none focus:outline-none ${
          focused ? "blur-none" : "cursor-pointer blur-md"
        } `}
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {children}
      </div>
    </>
  );
};

export default WordWrapper;
