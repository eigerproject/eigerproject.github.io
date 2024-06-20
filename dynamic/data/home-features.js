class Feature
{
    constructor(title, subtitle, ode_snippet)
    {
        this.title = title;
        this.subtitle = subtitle;
        this.code_snippet = code_snippet;
    }
}

const features =
[
    new Feature
    (
        "Clean and simple syntax",
        "Calculate the n-th member of the fibonacci sequence with this simple function",
        "~ Eigerlang Demonstration\n~ Nth member of the fibonacci sequence\nfunc fib(n)\n    if n <= 1 then\n        ret 1\n    end\n    ret fib(n-1) + fib(n-2)\nend"
    ),
    new Feature
    (
        "Basic I/O, Control Flow",
        "Comments, I/O operations and conditional statements",
        "~ This is a comment\nmessage = \"Hello, World!\"\nemitln(message)\n\nfunc ask(a,b)\n    emitln(\"What is \" + a.asString + \" + \" + b.asString + \"?\")\n    sum = int(in())\n    ret sum ?= (a + b)\nend\n\nif ask(9,10) then\n    emitln(\"Correct!\")\nelse\n    emitln(\"Wrong\")\nend"
    ),
    new Feature
    (
        "Object-oriented programming",
        "A simple OOP support (Work in progress)",
        "class Person\nfunc Person(name, surname)\n        this.name = name\n        this.surname = surname\n    end\n\n    func Introduction()\n        emitln(\"I am \" + this.name + \" \" + this.surname + \"!\")\n    end\n\n    func Greet(other)\n        emitln(this.name + \" greeted \" + other.name + \"!\")\n    end\nend\n\npx = Person(\"Name1\", \"Surname1\")\npy = Person(\"Name2\", \"Surname2\")\n\npx.Introduction()\npy.Introduction()\npx.Greet(py)\n\nemitln(Person(\"a\",\"b\").Introduction())"
    )
]
