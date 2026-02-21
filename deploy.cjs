const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// Безопасное удаление .git внутри dist (если вдруг появилось)
const gitDir = path.join(__dirname, 'dist', '.git');
if (fs.existsSync(gitDir)) {
  fs.rmSync(gitDir, { recursive: true, force: true });
  console.log('🧹 Удалена .git папка из dist/');
}

ghpages.publish(
  'dist',
  {
    dotfiles: true,
    remove: '.',
    history: false, // <--- добавлено: не использовать историю удаления
  },
  (err) => {
    if (err) {
      console.error('❌ Ошибка при публикации:', err);
    } else {
      console.log('✅ Успешно опубликовано!');
    }
  }
);
