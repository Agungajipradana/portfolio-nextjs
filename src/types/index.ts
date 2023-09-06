export interface AppShellProps {
  children: React.ReactNode;
}

export interface ContactProps {
  show: boolean;
  message: string;
}

export interface DarkModeContextTypeProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
