import { useTheme } from '../hooks/useTheme.jsx';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { MoonIcon, SunIcon } from './Icons.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();
  const { t } = useI18n();
  const label = isDark ? t('meta.themeToLight') : t('meta.themeToDark');

  return (
    <button
      type="button"
      className="theme-toggle"
      data-active={theme}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb" />
      </span>
      <span className="theme-toggle__icons" aria-hidden="true">
        <MoonIcon className="icon-moon" size={13} />
        <SunIcon className="icon-sun" size={13} />
      </span>
      <span className="theme-toggle__label">{isDark ? t('meta.themeDark') : t('meta.themeLight')}</span>
    </button>
  );
}
