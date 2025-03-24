type theme = 'light' | 'dark'
export function applyTheme(theme: theme): void {
    // Implementation details here...
  }
  
  // ✅ Valid usage:
  applyTheme("light");
  applyTheme("dark");
  
  // ❌ Invalid usage:
  applyTheme("blue");
  applyTheme(1);
  