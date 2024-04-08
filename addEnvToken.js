const fs = require('fs');
const readline = require('readline');

// Функция для записи токена в файл .env
function writeToEnvFile(token) {
	const envData = `TOKEN=${token}\n`;
	fs.writeFileSync('.env', envData);
	console.log('Файл .env успешно обновлен.');
}

// Проверяем, передан ли флаг --token
const tokenFlagIndex = process.argv.findIndex(arg => arg.startsWith('--token='));
if (tokenFlagIndex !== -1) {
	const token = process.argv[tokenFlagIndex].split('=')[1];
	if (token !== '') {
		writeToEnvFile(token);
	} else {
		console.error('Ошибка: Переданное значение токена пустое.');
	}
} else {
	// Функция для запроса токена у пользователя
	function askForToken() {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		return new Promise((resolve) => {
			rl.question('Введите ваш API токен: ', (token) => {
				rl.close();
				resolve(token);
			});
		});
	}

	// Функция для создания файла .env с токеном
	async function createEnvFile() {
		try {
			// Проверяем существование файла .env
			if (fs.existsSync('.env')) {
				const rl = readline.createInterface({
					input: process.stdin,
					output: process.stdout
				});

				// Спрашиваем пользователя, хочет ли он перезаписать файл .env
				rl.question('.env файл уже существует. Хотите ли вы перезаписать его? (yes/no): ', async (answer) => {
					rl.close();

					if (answer.toLowerCase() === 'yes') {
						const token = await askForToken();
						writeToEnvFile(token);
					} else {
						console.log('Файл .env не был перезаписан.');
					}
				});
			} else {
				const token = await askForToken();
				writeToEnvFile(token);
			}
		} catch (err) {
			console.error('Ошибка:', err);
		}
	}

	// Вызываем функцию для создания файла .env
	createEnvFile();
}
