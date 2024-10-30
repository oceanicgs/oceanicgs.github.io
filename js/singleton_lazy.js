
// Códigos para cada lenguaje
const codigos = {
    java: `
    public class LazySingleton {
        // Instancia estática y privada que almacena la única instancia del Singleton
        private static LazySingleton instance;
 
        public String mensaje = "Esto es un mensaje desde el lazy Singleton";

        // Constructor privado para evitar instanciación directa
        private LazySingleton() {}

        public static LazySingleton getInstance() {
            // Si la instancia no existe, la crea
            if (instance == null) {
                instance = new LazySingleton();
            }
            return instance;
        }
    }

    public class Client {
        public static void main(String arg[]) {
            System.out.println(LazySingleton.getInstance().mensaje); // -> Esto es un mensaje desde el lazy Singleton
        }
    }
        `,
    csharp: `
    class LazySingleton
    {
        // Instancia estática y privada que almacena la única instancia del Singleton
        private static LazySingleton instance;

        public string mensaje = "Esto es un mensaje desde el lazy Singleton";

        // Constructor privado para evitar instanciación directa
        private LazySingleton() { }

        public static LazySingleton GetInstance()
        {
            // Si la instancia no existe, la crea
            if (instance == null)
            {
                instance = new LazySingleton();
            }
            return instance;
        }

    }

    class Client
    {
        static void Main(string[] args)
        {
            Console.WriteLine(LazySingleton.GetInstance().mensaje); // -> Esto es un mensaje desde el lazy Singleton
        }
    }
        `,
    cplus: `
    class LazySingleton {

    public:
        string mensaje = "Esto es un mensaje desde el lazy Singleton";

        static LazySingleton& getInstance() {
            // Si la instancia no existe, la crea
            if (!instance) {
                instance = new LazySingleton();
            }
            return *instance;
        }

    // Prohibimos la copia de instancias del Singleton
        LazySingleton(const LazySingleton&) = delete;

        // Prohibimos la asignación entre instancias del Singleton
        LazySingleton& operator=(const LazySingleton&) = delete;

    private:
        // Constructor privado para evitar la creación directa de instancias
        LazySingleton() {}

        // Destructor privado para evitar la destrucción externa del Singleton
        ~LazySingleton() {}

        // Puntero a la única instancia de la clase en privado
        static LazySingleton* instance;
    };

    // Inicializar el puntero estático a nullptr
    LazySingleton* LazySingleton::instance = nullptr;

    int main() {
        cout << LazySingleton::getInstance().mensaje << endl; //Esto es un mensaje desde el lazy Singleton
    }
        `,
    python: `def hello_world():
    print("Hello, World!")

    hello_world()
    `
};

// Función para mostrar el código correspondiente
function mostrarCodigo(lenguaje) {
    const codigoElement = document.getElementById('codigo');
    codigoElement.textContent = codigos[lenguaje];  // Cambiamos el contenido del código
    codigoElement.className = 'language-' + lenguaje; // Actualizamos la clase del lenguaje
    hljs.highlightElement(codigoElement);  // Resaltamos el código
}
