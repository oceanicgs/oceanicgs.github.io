
// Códigos para cada lenguaje
const codigos = {
    java: `public class HelloWorld {
        public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    csharp: `using System;

    class Program {
        static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
    python: `def hello_world():
    print("Hello, World!")

    hello_world()`
};

// Función para mostrar el código correspondiente
function mostrarCodigo(lenguaje) {
    const codigoElement = document.getElementById('codigo');
    codigoElement.textContent = codigos[lenguaje];  // Cambiamos el contenido del código
    codigoElement.className = 'language-' + lenguaje; // Actualizamos la clase del lenguaje
    hljs.highlightElement(codigoElement);  // Resaltamos el código
}
