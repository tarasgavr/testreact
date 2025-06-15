// 1. Створення контексту
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light'); // Значення за замовчуванням

// 2. Провайдер контексту (в батьківському компоненті)
function App() {
  return (
    <ThemeContext.Provider>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Споживання контексту (в будь-якому дочірньому компоненті)
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
      Моя тема: {theme}
    </button>
  );
}

// 4. Експорт App для використання в index.js
export default App;