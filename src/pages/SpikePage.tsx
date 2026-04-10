import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Package, Cpu, BookOpen, Wrench, CheckCircle2, Cog, Bluetooth, Gauge, Zap, Code2, Play, RotateCcw, Variable, Braces, GitBranch, Repeat, Terminal } from "lucide-react";
import spikeIcon from "@/assets/spike-icon.png";

const SpikePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-[hsl(var(--spike-color)/.1)] border-b border-[hsl(var(--spike-color)/.2)]">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-spike transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> На главную
          </button>
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[hsl(var(--spike-color)/.15)] flex items-center justify-center flex-shrink-0">
              <img src={spikeIcon} alt="Spike Prime" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-spike text-primary-foreground mb-2">
                3–4 класс
              </span>
              <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground">
                Spike Prime
              </h1>
              <p className="font-body text-muted-foreground text-sm md:text-base mt-1">
                Продвинутая робототехника и программирование
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 md:py-14 space-y-14">
        {/* Детали набора */}
        <section id="details">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--spike-color)/.15)] flex items-center justify-center">
              <Package className="w-4 h-4 text-spike" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-extrabold text-foreground">
              Детали набора
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Программируемый хаб", desc: "Центральный блок с цветным LED-дисплеем 5×5, 6 портами ввода/вывода, встроенным гироскопом/акселерометром и динамиком." },
              { title: "2 больших мотора", desc: "Мощные моторы с встроенным датчиком вращения для точного управления движением робота." },
              { title: "1 средний мотор", desc: "Компактный мотор для вспомогательных механизмов: захватов, рычагов, поворотных платформ." },
              { title: "Датчик расстояния", desc: "Ультразвуковой датчик для определения расстояния до объектов и обнаружения препятствий." },
              { title: "Датчик цвета", desc: "Определяет 8 цветов, интенсивность отражённого света и окружающего освещения." },
              { title: "Датчик силы нажатия", desc: "Измеряет силу нажатия и касание. Подходит для создания интерактивных кнопок и бамперов." },
              { title: "500+ деталей Technic", desc: "Балки, оси, шестерни, коннекторы, колёса и гусеницы для создания сложных конструкций." },
              { title: "Аккумулятор", desc: "Перезаряжаемая литий-ионная батарея. Зарядка через Micro-USB, хватает на ~4 часа работы." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-spike mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm">{item.title}</h3>
                    <p className="font-body text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Тех. часть */}
        <section id="tech">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--spike-color)/.15)] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-spike" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-extrabold text-foreground">
              Технические характеристики
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: <Bluetooth className="w-5 h-5" />, label: "Подключение", value: "Bluetooth + USB" },
              { icon: <Cog className="w-5 h-5" />, label: "Моторы", value: "2 больших + 1 средний" },
              { icon: <Gauge className="w-5 h-5" />, label: "Датчики", value: "Расстояние, цвет, сила" },
              { icon: <Cpu className="w-5 h-5" />, label: "Процессор", value: "ARM Cortex-M4" },
              { icon: <Zap className="w-5 h-5" />, label: "Питание", value: "Li-Ion аккумулятор" },
              { icon: <BookOpen className="w-5 h-5" />, label: "Язык", value: "Scratch / Python" },
            ].map((spec, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 text-center">
                <div className="w-10 h-10 mx-auto rounded-lg bg-[hsl(var(--spike-color)/.1)] flex items-center justify-center text-spike mb-3">
                  {spec.icon}
                </div>
                <p className="font-body text-xs text-muted-foreground">{spec.label}</p>
                <p className="font-display font-bold text-foreground text-sm mt-0.5">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Курс */}
        <section id="course">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--spike-color)/.15)] flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-spike" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-extrabold text-foreground">
              Программа курса
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { num: 1, title: "Введение в Spike Prime", desc: "Знакомство с хабом, подключение, интерфейс программирования." },
              { num: 2, title: "Моторы и движение", desc: "Управление скоростью и направлением, танковый поворот, движение по дуге." },
              { num: 3, title: "Работа с датчиками", desc: "Датчик цвета, расстояния, силы нажатия. Условия и циклы." },
              { num: 4, title: "Продвинутые механизмы", desc: "Захваты, подъёмники, рулевое управление, шагающие роботы." },
              { num: 5, title: "Программирование на Python", desc: "Переход от блочного к текстовому программированию, переменные, функции." },
              { num: 6, title: "Проект «Робот-сортировщик»", desc: "Робот, распознающий цвета и сортирующий объекты по категориям." },
              { num: 7, title: "Проект «Автономный транспорт»", desc: "Робот с навигацией по линии и объездом препятствий." },
              { num: 8, title: "Финальный проект", desc: "Свободный проект: ученик придумывает и реализует своего робота." },
            ].map((lesson) => (
              <div key={lesson.num} className="flex gap-4 items-start rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-spike text-primary-foreground flex items-center justify-center font-display font-extrabold text-sm flex-shrink-0">
                  {lesson.num}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-sm">{lesson.title}</h3>
                  <p className="font-body text-muted-foreground text-sm mt-0.5">{lesson.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Программирование */}
        <section id="programming">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--spike-color)/.15)] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-spike" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-extrabold text-foreground">
              Программирование
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-bold text-foreground mb-3">Среда программирования SPIKE App</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                SPIKE Prime поддерживает два режима программирования в приложении LEGO Education SPIKE App:
                <strong className="text-foreground"> блочный (Word Blocks)</strong> на основе Scratch и 
                <strong className="text-foreground"> текстовый (Python)</strong>. Блочный режим идеален для начинающих — 
                дети перетаскивают визуальные блоки, составляя алгоритмы. Текстовый режим на MicroPython позволяет 
                писать полноценный код и готовит к «взрослому» программированию.
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Приложение доступно на Windows, macOS, ChromeOS, iOS и Android. Программы загружаются 
                на хаб по Bluetooth или USB и выполняются автономно.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-foreground mb-3">Блочное программирование (Scratch)</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: <Play className="w-4 h-4" />, title: "Блоки событий", desc: "Запуск программы по нажатию кнопки хаба, при получении сообщения, по таймеру или при изменении датчика." },
                  { icon: <Cog className="w-4 h-4" />, title: "Блоки моторов", desc: "Управление 3 моторами: задание скорости (%), угла поворота, количества оборотов, синхронное управление парой моторов." },
                  { icon: <GitBranch className="w-4 h-4" />, title: "Блоки условий", desc: "«Если — то — иначе», сравнение значений датчиков, логические операторы И/ИЛИ/НЕ для сложных условий." },
                  { icon: <Repeat className="w-4 h-4" />, title: "Блоки циклов", desc: "Повтор N раз, бесконечный цикл, цикл «пока выполняется условие». Вложенные циклы для сложных алгоритмов." },
                  { icon: <Variable className="w-4 h-4" />, title: "Переменные и списки", desc: "Создание переменных для хранения данных: счётчик очков, показания датчиков, состояние робота." },
                  { icon: <Braces className="w-4 h-4" />, title: "Мои блоки (функции)", desc: "Создание собственных блоков-подпрограмм для повторяющихся действий. Помогает структурировать код." },
                ].map((block, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[hsl(var(--spike-color)/.1)] flex items-center justify-center text-spike flex-shrink-0 mt-0.5">
                        {block.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground text-sm">{block.title}</h4>
                        <p className="font-body text-muted-foreground text-xs mt-1">{block.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-foreground mb-3">Программирование на Python</h3>
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  SPIKE Prime использует <strong className="text-foreground">MicroPython</strong> — облегчённую версию Python, 
                  оптимизированную для микроконтроллеров. Ученики пишут код в текстовом редакторе приложения SPIKE App 
                  с подсветкой синтаксиса, автодополнением и встроенной документацией.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: <Terminal className="w-4 h-4" />, title: "Базовый синтаксис", desc: "Переменные, типы данных (int, float, str), арифметика, print() для вывода на дисплей хаба." },
                    { icon: <GitBranch className="w-4 h-4" />, title: "Управляющие конструкции", desc: "if/elif/else, циклы for и while, операторы сравнения и логические операторы." },
                    { icon: <Braces className="w-4 h-4" />, title: "Функции", desc: "def для создания функций, параметры и возвращаемые значения, модульность программ." },
                    { icon: <Code2 className="w-4 h-4" />, title: "Библиотеки SPIKE", desc: "import hub, motor, color_sensor, distance_sensor — готовые модули для управления оборудованием." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[hsl(var(--spike-color)/.1)] flex items-center justify-center text-spike flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground text-sm">{item.title}</h4>
                        <p className="font-body text-muted-foreground text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display font-bold text-foreground mb-3">Примеры программ</h3>
              <div className="space-y-3">
                {[
                  { title: "Движение по квадрату (блоки)", desc: "Цикл 4 раза: Пара моторов вперёд на 20 см → Поворот на 90° вправо. Робот чертит квадратный маршрут." },
                  { title: "Следование за рукой (блоки)", desc: "Бесконечный цикл: если расстояние < 15 см → ехать назад, если > 30 см → ехать вперёд, иначе → стоп." },
                  { title: "Сортировщик цветов (Python)", desc: "color = color_sensor.color(port.A)\nif color == 'red': motor.run(port.B, 90)\nelif color == 'blue': motor.run(port.B, -90)" },
                  { title: "Автономная навигация (Python)", desc: "while True:\n  dist = distance_sensor.distance(port.C)\n  if dist < 100: motor_pair.steer(50)\n  else: motor_pair.move(200)" },
                ].map((example, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-spike mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-display font-bold text-foreground text-sm">{example.title}</h4>
                      <p className="font-body text-muted-foreground text-xs mt-0.5 whitespace-pre-line">{example.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Сборки */}
        <section id="builds">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--spike-color)/.15)] flex items-center justify-center">
              <Wrench className="w-4 h-4 text-spike" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-extrabold text-foreground">
              Инструкции по сборке
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Танцор (Break Dancer)", difficulty: "Начальный", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt55dd0b3793177261/5f880233e53bb90f6c283622/break-dance-bi-pdf-book1of2.pdf?locale=en-us" },
              { name: "Тренер (The Coach)", difficulty: "Начальный", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt23cdd348ed896466/5f8802a5d041c37a4af70694/coach-bi-pdf-book1of1.pdf?locale=en-us" },
              { name: "Собачка Кики (Kiki)", difficulty: "Начальный", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt2423455cd4b1ce39/5f88029ef4c5ce0e93db159b/help-bi-pdf-book1of1.pdf?locale=en-us" },
              { name: "Прыгун (Hopper)", difficulty: "Начальный", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt94f5015eec2dae38/5f88025b722f2a15c7ba2521/hopper-bi-pdf-book1of1.pdf?locale=en-us" },
              { name: "Метеостанция (Weathercaster)", difficulty: "Средний", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltca11948c05961e33/5f8802c725a3fc0c1a86b350/rain-of-shine-bi-pdf-book1of1.pdf?locale=en-us" },
              { name: "Базовая тележка (Driving Base)", difficulty: "Средний", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blte58422fa7d508a60/5f8802b882eaa522ca601c9f/driving-base-bi-pdf-book1of1.pdf?locale=en-us" },
              { name: "Захваты (Grabbers)", difficulty: "Средний", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt56a81c75560c9a81/5f8802cbf71916144453a493/supercleaup-bi-pdf-book1of3.pdf?locale=en-us" },
              { name: "Носорог (Rhino)", difficulty: "Продвинутый", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt990212b2cd50c4d3/5f88025fbc43790f5c4389ee/going-the-distance-bi-pdf-book1of2.pdf?locale=en-us" },
              { name: "Робот-рука (Robot Hand)", difficulty: "Продвинутый", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltd34f6e501eb5ff30/5f8802b8bf5ab07ee90076df/pass-the-brick-bi-pdf-book1of1.pdf?locale=en-us" },
              { name: "Сейф (Safe-Deposit Box)", difficulty: "Продвинутый", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt3ee6ec3b5bb66752/5f88027b69efd81ab4debf10/keep-ti-safe-bi-pdf-book1of2.pdf?locale=en-us" },
              { name: "ЧПУ-станок (CNC Machine)", difficulty: "Продвинутый", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltf2bad60f3bd4d67a/5f88027ded5ccb12e4342da0/broken-bi-pdf-book1of2.pdf?locale=en-us" },
              { name: "Сортировщик (Package Sorter)", difficulty: "Продвинутый", pdf: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltebfffd33fc0a5e72/5f8802a1bc43790f5c4389f2/automate-it-bi-pdf-book1of3.pdf?locale=en-us" },
            ].map((build, i) => (
              <a
                key={i}
                href={build.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow group cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--spike-color)/.1)] flex items-center justify-center text-spike mb-3 group-hover:bg-[hsl(var(--spike-color)/.2)] transition-colors">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm">{build.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    build.difficulty === "Начальный" ? "bg-accent/20 text-accent" :
                    build.difficulty === "Средний" ? "bg-secondary/20 text-secondary" :
                    "bg-destructive/20 text-destructive"
                  }`}>
                    {build.difficulty}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-spike transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center font-body text-sm text-muted-foreground">
          © 2026 РобоСтарт — Онлайн-школа робототехники для детей
        </div>
      </footer>
    </div>
  );
};

export default SpikePage;
