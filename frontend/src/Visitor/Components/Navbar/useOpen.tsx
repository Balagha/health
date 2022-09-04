import { useState } from "react";

const useOpen = (initialValue: boolean) => {
  const [isOpen, setOpen] = useState(initialValue);
  const toggleValue = () => setOpen(!isOpen);
  return [isOpen, toggleValue];
};

export default useOpen;
