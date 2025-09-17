// ========================================
//   MAIN JAVASCRIPT - Основная функциональность
//   ========================================

// Данные для интерактивного теста
const testQuestions = [
    {
        question: "Что означает аббревиатура UX?",
        options: [
            "User Experience (Пользовательский опыт)",
            "User Interface (Пользовательский интерфейс)",
            "User Exchange (Пользовательский обмен)",
            "User Extension (Пользовательское расширение)"
        ],
        correct: 0
    },
    {
        question: "Какой принцип UX-дизайна является наиболее важным?",
        options: [
            "Красота интерфейса",
            "Понимание потребностей пользователя",
            "Скорость загрузки",
            "Количество функций"
        ],
        correct: 1
    },
    {
        question: "Что такое информационная архитектура?",
        options: [
            "Дизайн логотипов",
            "Структурирование и организация информации",
            "Создание анимаций",
            "Настройка серверов"
        ],
        correct: 1
    },
    {
        question: "Какой метод исследования пользователей наиболее эффективен?",
        options: [
            "Только онлайн-опросы",
            "Только фокус-группы",
            "Комбинация различных методов",
            "Только интервью"
        ],
        correct: 2
    },
    {
        question: "Что такое wireframe в UX-дизайне?",
        options: [
            "Цветовая схема интерфейса",
            "Схематичное представление структуры страницы",
            "Анимация переходов",
            "Типографика"
        ],
        correct: 1
    },
    {
        question: "Какой принцип помогает пользователям быстро находить нужную информацию?",
        options: [
            "Принцип прогрессивного раскрытия",
            "Принцип случайного размещения",
            "Принцип скрытия информации",
            "Принцип сложной навигации"
        ],
        correct: 0
    },
    {
        question: "Что такое usability testing?",
        options: [
            "Тестирование скорости сайта",
            "Тестирование удобства использования",
            "Тестирование безопасности",
            "Тестирование совместимости"
        ],
        correct: 1
    },
    {
        question: "Какой цвет чаще всего ассоциируется с действием 'удалить'?",
        options: [
            "Зеленый",
            "Синий",
            "Красный",
            "Желтый"
        ],
        correct: 2
    },
    {
        question: "Что такое A/B тестирование?",
        options: [
            "Тестирование двух версий интерфейса",
            "Тестирование только мобильной версии",
            "Тестирование только десктопной версии",
            "Тестирование скорости загрузки"
        ],
        correct: 0
    },
    {
        question: "Какой принцип дизайна помогает создать визуальную иерархию?",
        options: [
            "Принцип случайности",
            "Принцип контраста",
            "Принцип монотонности",
            "Принцип неразличимости"
        ],
        correct: 1
    },
    {
        question: "Что такое persona в UX-дизайне?",
        options: [
            "Аватар пользователя",
            "Вымышленный персонаж, представляющий целевую аудиторию",
            "Логотип компании",
            "Иконка приложения"
        ],
        correct: 1
    },
    {
        question: "Какой принцип помогает пользователям понять, что элемент интерактивный?",
        options: [
            "Принцип невидимости",
            "Принцип обратной связи",
            "Принцип сложности",
            "Принцип статичности"
        ],
        correct: 1
    },
    {
        question: "Что такое accessibility в веб-дизайне?",
        options: [
            "Скорость загрузки сайта",
            "Доступность для людей с ограниченными возможностями",
            "Красота дизайна",
            "Количество функций"
        ],
        correct: 1
    },
    {
        question: "Какой принцип помогает пользователям избежать ошибок?",
        options: [
            "Принцип предупреждения",
            "Принцип скрытия",
            "Принцип сложности",
            "Принцип неопределенности"
        ],
        correct: 0
    },
    {
        question: "Что такое responsive design?",
        options: [
            "Дизайн только для мобильных устройств",
            "Дизайн, адаптирующийся под разные размеры экранов",
            "Дизайн только для десктопов",
            "Дизайн с фиксированными размерами"
        ],
        correct: 1
    }
];

// Переменные для теста
let currentQuestion = 0;
let userAnswers = [];
let testStartTime = null;
let testTimer = null;

// DOM элементы
let elements = {};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Определяем элементы после загрузки DOM
    elements = {
        testContainer: document.getElementById('test-container'),
        testStart: document.getElementById('test-start'),
        testQuestion: document.getElementById('test-question'),
        testResults: document.getElementById('test-results'),
        startTestBtn: document.getElementById('start-test-btn'),
        questionNumber: document.getElementById('question-number'),
        totalQuestions: document.getElementById('total-questions'),
        progressFill: document.getElementById('progress-fill'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        prevBtn: document.getElementById('prev-btn'),
        nextBtn: document.getElementById('next-btn'),
        finalScore: document.getElementById('final-score'),
        correctAnswers: document.getElementById('correct-answers'),
        wrongAnswers: document.getElementById('wrong-answers'),
        testTime: document.getElementById('test-time'),
        restartBtn: document.getElementById('retake-btn'),
    reviewBtn: document.getElementById('review-btn')
    };
    
    // Отладочная информация
    console.log('Все элементы найдены:', elements);
    console.log('Количество вопросов:', testQuestions.length);
    
    initializeTest();
    initializeNavigation();
    initializeSmoothScrolling();
    initializeSectionNavigation();
});

// Инициализация теста
function initializeTest() {
    console.log('Инициализация теста...');
    console.log('startTestBtn:', elements.startTestBtn);
    
    if (elements.startTestBtn) {
        elements.startTestBtn.addEventListener('click', startTest);
        console.log('Обработчик события добавлен к кнопке "Начать тест"');
    } else {
        console.error('Кнопка "Начать тест" не найдена!');
    }
    
    if (elements.restartBtn) {
        elements.restartBtn.addEventListener('click', restartTest);
    }
    
    if (elements.reviewBtn) {
        elements.reviewBtn.addEventListener('click', showReview);
    }
    
    if (elements.prevBtn) {
        elements.prevBtn.addEventListener('click', previousQuestion);
    }
    
    if (elements.nextBtn) {
        elements.nextBtn.addEventListener('click', nextQuestion);
    }
    
    // Устанавливаем общее количество вопросов
    if (elements.totalQuestions) {
        elements.totalQuestions.textContent = testQuestions.length;
    }
}

// Начало теста
function startTest() {
    console.log('Функция startTest вызвана!');
    currentQuestion = 0;
    userAnswers = [];
    testStartTime = Date.now();
    
    // Скрываем стартовый экран и показываем первый вопрос
    elements.testStart.style.display = 'none';
    elements.testQuestion.style.display = 'block';
    elements.testResults.style.display = 'none';
    
    // Запускаем таймер
    startTimer();
    
    // Показываем первый вопрос
    showQuestion();
}

// Показать вопрос
function showQuestion() {
    const question = testQuestions[currentQuestion];
    
    // Обновляем номер вопроса
    elements.questionNumber.textContent = currentQuestion + 1;
    
    // Обновляем прогресс-бар
    const progress = ((currentQuestion + 1) / testQuestions.length) * 100;
    elements.progressFill.style.width = progress + '%';
    
    // Обновляем текст вопроса
    elements.questionText.textContent = question.question;
    
    // Создаем опции
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'answer-option';
        optionElement.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option-${index}" style="display: none;">
            <label for="option-${index}">${option}</label>
        `;
        
        // Если уже есть ответ на этот вопрос, отмечаем его
        if (userAnswers[currentQuestion] !== undefined && userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        // Добавляем обработчик клика на всю опцию
        optionElement.addEventListener('click', function() {
            // Убираем выделение с других опций
            document.querySelectorAll('.answer-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Выделяем текущую опцию
            this.classList.add('selected');
            
            // Сохраняем ответ
            userAnswers[currentQuestion] = parseInt(this.querySelector('input').value);
            updateNavigationButtons();
        });
        
        elements.optionsContainer.appendChild(optionElement);
    });
    
    updateNavigationButtons();
}

// Обновить кнопки навигации
function updateNavigationButtons() {
    // Кнопка "Предыдущий"
    elements.prevBtn.disabled = currentQuestion === 0;
    
    // Кнопка "Следующий"
    const hasAnswer = userAnswers[currentQuestion] !== undefined;
    elements.nextBtn.disabled = !hasAnswer;
    
    // Если это последний вопрос, меняем текст кнопки
    if (currentQuestion === testQuestions.length - 1) {
        elements.nextBtn.innerHTML = `
            Завершить тест
            <i class="fas fa-check"></i>
        `;
    } else {
        elements.nextBtn.innerHTML = `
            Следующий
            <i class="fas fa-arrow-right"></i>
        `;
    }
}

// Предыдущий вопрос
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Следующий вопрос
function nextQuestion() {
    if (currentQuestion < testQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        finishTest();
    }
}

// Завершение теста
function finishTest() {
    // Останавливаем таймер
    stopTimer();
    
    // Вычисляем результаты
    const correctCount = userAnswers.reduce((count, answer, index) => {
        return count + (answer === testQuestions[index].correct ? 1 : 0);
    }, 0);
    
    const wrongCount = testQuestions.length - correctCount;
    const score = Math.round((correctCount / testQuestions.length) * 100);
    
    // Обновляем результаты
    elements.finalScore.textContent = score;
    elements.correctAnswers.textContent = correctCount;
    elements.wrongAnswers.textContent = wrongCount;
    
    // Вычисляем время прохождения
    const testDuration = Date.now() - testStartTime;
    const minutes = Math.floor(testDuration / 60000);
    const seconds = Math.floor((testDuration % 60000) / 1000);
    elements.testTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Скрываем вопросы и показываем результаты
    elements.testQuestion.style.display = 'none';
    elements.testResults.style.display = 'block';
    
    // Прокручиваем к результатам
    elements.testResults.scrollIntoView({ behavior: 'smooth' });
}

// Перезапуск теста
function restartTest() {
    currentQuestion = 0;
    userAnswers = [];
    testStartTime = null;
    
    // Скрываем результаты и показываем стартовый экран
    elements.testResults.style.display = 'none';
    elements.testStart.style.display = 'block';
    
    // Прокручиваем к началу теста
    elements.testStart.scrollIntoView({ behavior: 'smooth' });
}

// Просмотр ответов
function showReview() {
    console.log('Показываем обзор ответов...');
    
    // Создаем модальное окно для просмотра ответов
    const modal = document.createElement('div');
    modal.className = 'review-modal';
    modal.innerHTML = `
        <div class="review-modal-content">
            <div class="review-header">
                <h3>Обзор ответов</h3>
                <button class="review-close" id="review-close">×</button>
            </div>
            <div class="review-content" id="review-content">
                <!-- Содержимое будет добавлено динамически -->
            </div>
        </div>
    `;
    
    // Добавляем стили для модального окна
    const style = document.createElement('style');
    style.textContent = `
        .review-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        }
        
        .review-modal-content {
            background: var(--bg-card);
            border-radius: var(--radius-xl);
            padding: var(--spacing-xl);
            max-width: 800px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-xl);
            padding-bottom: var(--spacing-lg);
            border-bottom: 2px solid var(--border-color);
        }
        
        .review-header h3 {
            margin: 0;
            color: var(--text-color);
            font-size: 1.5rem;
        }
        
        .review-close {
            background: none;
            border: none;
            font-size: 2rem;
            color: var(--text-light);
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .review-close:hover {
            color: var(--error-color);
        }
        
        .review-question {
            margin-bottom: var(--spacing-xl);
            padding: var(--spacing-lg);
            background: var(--bg-light);
            border-radius: var(--radius-lg);
            border-left: 4px solid var(--primary-color);
        }
        
        .review-question h4 {
            margin: 0 0 var(--spacing-md) 0;
            color: var(--text-color);
            font-size: 1.125rem;
        }
        
        .review-option {
            padding: var(--spacing-md);
            margin: var(--spacing-sm) 0;
            border-radius: var(--radius-md);
            transition: all 0.3s ease;
        }
        
        .review-option.correct {
            background: rgba(34, 197, 94, 0.1);
            border: 1px solid var(--success-color);
        }
        
        .review-option.incorrect {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid var(--error-color);
        }
        
        .review-option.user-answer {
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid var(--primary-color);
        }
        
        .review-option.correct.user-answer {
            background: rgba(34, 197, 94, 0.2);
        }
        
        .review-option.incorrect.user-answer {
            background: rgba(239, 68, 68, 0.2);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Заполняем содержимое
    const reviewContent = document.getElementById('review-content');
    testQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'review-question';
        
        let optionsHtml = '';
        question.options.forEach((option, optionIndex) => {
            let optionClass = 'review-option';
            let optionText = option;
            
            if (optionIndex === question.correct) {
                optionClass += ' correct';
                optionText += ' ✓ (Правильный ответ)';
            }
            
            if (optionIndex === userAnswer) {
                optionClass += ' user-answer';
                optionText += ' ← Ваш ответ';
            }
            
            optionsHtml += `<div class="${optionClass}">${optionText}</div>`;
        });
        
        questionDiv.innerHTML = `
            <h4>Вопрос ${index + 1}: ${question.question}</h4>
            ${optionsHtml}
            <div style="margin-top: var(--spacing-md); font-weight: 600; color: ${isCorrect ? 'var(--success-color)' : 'var(--error-color)'};">
                ${isCorrect ? '✓ Правильно' : '✗ Неправильно'}
            </div>
        `;
        
        reviewContent.appendChild(questionDiv);
    });
    
    // Обработчик закрытия модального окна
    document.getElementById('review-close').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Закрытие по клику вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
}

// Таймер теста
function startTimer() {
    testTimer = setInterval(() => {
        // Таймер обновляется в реальном времени
    }, 1000);
}

function stopTimer() {
    if (testTimer) {
        clearInterval(testTimer);
        testTimer = null;
    }
}

// Инициализация навигации
function initializeNavigation() {
    // Плавная прокрутка к якорям
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Плавная прокрутка
function initializeSmoothScrolling() {
    // Добавляем плавную прокрутку для всех ссылок с якорями
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Анимации при прокрутке
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами с классом animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Инициализация анимаций при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
});

// Обработка ошибок
window.addEventListener('error', function(e) {
    console.error('Ошибка JavaScript:', e.error);
});

// Кнопки навигации по секциям
let sectionNav = null;
let navUpBtn = null;
let navDownBtn = null;
let currentSectionIndex = 0;
let sections = [];

function initializeSectionNavigation() {
    sectionNav = document.getElementById('section-nav');
    navUpBtn = document.getElementById('nav-up');
    navDownBtn = document.getElementById('nav-down');
    
    if (!sectionNav || !navUpBtn || !navDownBtn) {
        console.log('Элементы навигации по секциям не найдены');
        return;
    }
    
    // Получаем все секции
    sections = Array.from(document.querySelectorAll('section[id], .hero[id]'));
    
    console.log('Найдено секций:', sections.length);
    console.log('Секции:', sections.map(s => s.id));
    
    // Обработчики событий
    navUpBtn.addEventListener('click', navigateUp);
    navDownBtn.addEventListener('click', navigateDown);
    
    // Отслеживание прокрутки для обновления текущей секции
    window.addEventListener('scroll', updateCurrentSection);
    
    // Показываем кнопки после небольшой задержки
    setTimeout(() => {
        sectionNav.classList.add('visible');
    }, 1000);
    
    // Обновляем состояние кнопок
    updateNavigationButtons();
    
    console.log('Навигация по секциям инициализирована');
}

function navigateUp() {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        scrollToSection(currentSectionIndex);
    }
}

function navigateDown() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
    }
}

function scrollToSection(index) {
    if (sections[index]) {
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Обновляем состояние кнопок после прокрутки
        setTimeout(() => {
            updateNavigationButtons();
        }, 500);
    }
}

function updateCurrentSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionIndex = index;
            updateNavigationButtons();
        }
    });
}

function updateNavigationButtons() {
    // Скрываем весь контейнер на первой и последней секциях
    if (currentSectionIndex <= 0 || currentSectionIndex >= sections.length - 1) {
        sectionNav.classList.add('no-buttons');
        return;
    }
    
    // Показываем контейнер на средних секциях
    sectionNav.classList.remove('no-buttons');
    
    // Обновляем состояние кнопки "Вверх"
    navUpBtn.disabled = false;
    navUpBtn.title = 'Предыдущая секция';
    navUpBtn.classList.remove('hidden');
    
    // Обновляем состояние кнопки "Вниз"
    navDownBtn.disabled = false;
    navDownBtn.title = 'Следующая секция';
    navDownBtn.classList.remove('hidden');
}

// Экспорт функций для тестирования (если нужно)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        testQuestions,
        startTest,
        finishTest,
        restartTest,
        initializeSectionNavigation,
        navigateUp,
        navigateDown
    };
}
