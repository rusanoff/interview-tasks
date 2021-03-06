# JavaScript

- [Базовые вопросы](#Базовые-вопросы)
- [Продвинутые вопросы](#Продвинутые-вопросы)

## Базовые вопросы

### Типы данных?

- number
- string
- boolean
- null
- undefined
- object
- symbol
- bigint

> symbol - это уникальный идентификатор, не преобразуется в строку автоматически,
> игнорируются циклом for-in и Object.keys(), копируются при Object.assign,
> позволяют сделать объект итерируемым с помощью Symbol.iterator и метода next(),
> который возвращает:
> `{ done, value }` или просто `{ done: true }`


### Можете ли вы назвать две программные парадигмы, важные для разработчиков приложений JavaScript?

- Прототипное наследование 
- Функциональное программирование


### Что такое функциональное программирование?

Функциональное программирование создает программы путем составления функций и позволяет
избежать общего состояния и изменчивости данных.
Это чистые функции, отсутствие побочных эффектов, функции высшего порядка,
декларативный подход…


### Что такое ООП? Основные принципы?

...


### Объясните, как this работает в JavaScript?

1. Если ключевое слово new используется при вызове функции, `this` внутри функции
   является совершенно новым объектом. Ключевое слово `new` всегда создает новый `this`

2. Если для вызова/создания функции используются `apply`, `call` или `bind`, то `this`
   внутри функции — это объект, который передается в качестве аргумента

3. Если функция вызывается как метод, например, `obj.method()`, то `this` — это объект,
   к которому принадлежит функция. То есть `this` - это то, что после точки

4. Если функция вызывается без контекста, то this является глобальным объектом.
   В браузере это объект window. В строгом режиме (`’use strict’`), this будет `undefined`.

5. Если функция является стрелочной функцией, то она получает значение `this`
   из лексического окружения во время ее создания.


### Объясните делегирование событий

Делегирование событий — это приём, заключающийся в добавлении обработчиков событий к
родительскому элементу, а не к дочерним элементам. Обработчик будет срабатывать
всякий раз, когда событие будет запущено на дочерних элементах благодаря всплытию
событий в DOM. Преимущества этого приёма:

- Экономит объем используемой памяти, т.к. для родительского элемента требуется
  только один обработчик
- Не нужно привязывать или убирать обработчики при добавлении и удалении элементов


### Где лучше размещать скрипты, в шапке или подвале?

Зависит от того, что скрипт делает. Вообще размещать скрипты стоит в подвале,
чтобы не блокировать построение DOM, но, уверен, есть ситуации, когда стоит
подключить скрипт в шапке


### Что такое замыкание?

Замыкания — это функции, которые имеют доступ к переменным внешней
(замыкающей) функции — цепочке областей видимости даже после того, как внешняя
функция вернулась


### Что такое деструктуризация?

Это специальный синтаксис, который позволяет нам "распаковать" массивы или объекты
в кучу переменных. Можно переименовать св-во через двоеточие


### Как получить ключи объекта?

`Object.keys() `(Вернет только `enumerable`)


### Как получить значения свойств объекта?

`Object.values()` (Вернет только enumerable)


### Как перебрать свойства объекта?

- `for-in`
- `Object.keys().forEach()`


### В чем нюанс цикла for-in?

- Нужна проверка `hasOwnProperty`
- не соблюдает порядок ключей
- пройдет только по enumerable свойствам


### Что вернет Object.keys() и Object.values() для массива?

- `Object.keys()` - массив строк индексов
- `Object.values()` - тот же массив с новой ссылкой


### Чем полезен for-of?

`Array.prototype.forEach()` невозможно прервать, а для `for-of` доступны `break`
и `continue`


### Чему равно x[1].id?

```javascript
const x = [ { id: 1 }, { id: 2 } ];
const y = Object.values(x);
y[1].id = 3;
// x[1].id = ?
```

Будет равен 3, так как ссылка на объект сохранится


### Что будет после каждого вызова?

```javascript
const func = (b = 1) => { console.log(b) };

func(undefined) // ?
func() // ?
func(null) // ?
func(2) // ?
```

- 1
- 1
- null
- 2


### Как у всех элементов на странице с классом 'first' изменить класс на 'second'?

1.
```javascript
document
    .querySelectorAll('.first')
    .forEach((element) => {
        element.classList.remove('first');
        element.classList.add('second');
    });
```

2.
```javascript
const elements = document.getElementsByClassName('first');

[...elements].forEach(element => {
    element.classList.remove('first');
    element.classList.add('second');
});
```

3.
```javascript
Array.prototype.forEach.call(elements, element => {
    element.classList.remove('first');
    element.classList.add('second');
});
```


## Расскажи про call, apply, bind?

...


## Продвинутые вопросы

### Чем отличается async и defer?

- `defer` не блокирует страницу, сохраняет порядок выполнения
- `async` не сохраняет порядок выполнения, что первое загрузилось то и выполнится


### В чем разница между событием `load` и событием `DOMContentLoaded`?

- Событие `DOMContentLoaded` вызывается, когда исходный HTML-документ полностью
  загружен и обработан, не дожидаясь окончания загрузки таблиц стилей, изображений
  и скриптов
- Событие `load` происходит только после загрузки DOM и всех зависимых ресурсов


### Что выведет код?

```javascript
var Employee = {
  company: 'xyz'
};

var emp1 = Object.create(Employee);

delete emp1.company;

console.log(emp1.company);
```

Выведет 'xyz', потому что `Object.create(obj)` кладет свойства obj в прототип,
а мы удаляем собственное свойство объекта emp1


### Почему 0.1 + 0.2 === 0.3 возвращает false?

Потому что JS неточно хранит числа с плавающей запятой в двоичном виде

> Во избежании этого можно оперировать целыми числами, разделить их потом на число
> с количеством нужных нулей


### Что такое цикл событий (event loop)? В чем разница между стеком вызовов (call stack) и очередью событий (task queue)?

Цикл событий — это однопоточный бесконечный цикл, который контролирует стек вызовов
и проверяет, есть ли какая-либо работа, которую необходимо выполнить в очереди задач.
Если стек вызовов пуст и в очереди задач есть функции (макрозадачи),
то функция удаляется из очереди и помещается в стек вызовов для выполнения.
После макрозадач выполняются микрозадачи (обычно - это промисы) и только потом
отложенные макрозадачи (`setTimeout`)


### В чём разница между ES6-классами и конструкторами функций?

Разница в наследовании. Если в классе мы используем `extends` и `super()`, то в
функциях мы должны вызвать `Parent.call(this, args);`


### Throttling и debouncing, passive: true, intersection observer?

...


### Как схлопнуть массив с вложенностью?

1.
```javascript
const flatten = arr => arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []);
```

2.
```javascript
[].flat(Infinity);
```


### Чем отличается window.location.href от window.location.replace?

...
