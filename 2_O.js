// Open Close Principle
/* Программный артефакт должен быть открыт для расширения, но закрыт для модификации. (Бертран Мейер)

Вы должны иметь возможность расширять поведение классов, не изменяя его. (Роберт С. Мартин)

Цель архитектуры программного обеспечения - обеспечить простоту внесения изменений в программное обеспечение. Принцип открытого-закрытого (OCP) помогает нам в достижении этой цели, поскольку сводит к минимуму изменения, которые необходимо внести в рабочий код.

Эта цель достигается путем разделения системы на компоненты и организации этих компонентов в иерархию зависимостей, которая защищает компоненты более высокого уровня от изменений в компонентах более низкого уровня.(Роберт С. Мартин)

Это означает, что мы должны разработать класс, закрытый для модификаций, то есть он не будет изменен, но также открыт, поскольку новые функции могут быть добавлены путем расширения этого класса.
*/

class Shape {
  area() {
    throw new Error('Area method should be implemented')
  }
}

class Square extends Shape {
  constructor(size) {
    super()
    this.size = size
  }

  area() {
    return this.size ** 2
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return (this.radius ** 2) * Math.PI
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

class Triangle extends Shape {
  constructor(a, b) {
    super()
    this.a = a
    this.b = b
  }

  area() {
    return (this.a * this.b) / 2
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area()
      return acc
    }, 0)
  }
}


const calc = new AreaCalculator([
  new Square(10),
  new Circle(1),
  new Circle(5),
  new Rect(10, 20),
  new Triangle(10, 15)
])

console.log(calc.sum())
