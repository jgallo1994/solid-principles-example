# SOLID Principles Examples in TypeScript

## English

This project demonstrates the application of SOLID principles in TypeScript through simple examples and a final example that integrates all principles.

### SOLID Principles

1. **Single Responsibility Principle (SRP)**

   **Principle:** A class should have only one reason to change, meaning it should have a single responsibility.

   **Example:** The file `src/srp.ts` shows how to separate user and task management logic into different classes.

   **Command to run SRP example:**

    ```bash
    npm run srp
    ```

2. **Open/Closed Principle (OCP)**

   **Principle:** Software entities should be open for extension but closed for modification.

   **Example:** The file `src/ocp.ts` demonstrates how to extend the functionality of a class without modifying it.

    ```bash
    npm run ocp
    ```

3. **Liskov Substitution Principle (LSP)**

   **Principle:** Objects of a derived class should be able to replace objects of the base class without altering the correct functioning of the program.

   **Example:** The file `src/lsp.ts` shows how to extend the functionality of a base class while still adhering to its contract.

    ```bash
    
    npm run lsp
    ```

4. **Interface Segregation Principle (ISP)**

   **Principle:** Clients should not be forced to depend on interfaces they do not use. It is better to have several specific interfaces than a general-purpose one.

   **Example:** The file `src/isp.ts` demonstrates how to design specific interfaces for user and task operations.

    ```bash
    npm run isp
    ```

5. **Dependency Inversion Principle (DIP)**

   **Principle:** Dependencies should be on abstractions, not on concrete classes. Details should depend on abstractions, not the other way around.

   **Example:** The file `src/dip.ts` demonstrates the principle of dependency inversion using interfaces and concrete classes.

    ```bash
    npm run dip
    ```


### Integrated Final Example

The `src/solid.ts` file combines all SOLID principles into a simple application that manages users and tasks.

**How to run the final example:**

```bash
npm solid
```

This file shows how each SOLID principle is integrated into a practical application.

___

## Español

Este proyecto demuestra la aplicación de los principios SOLID en TypeScript mediante ejemplos simples y un ejemplo final que integra todos los principios.

### Principios SOLID

1. **Single Responsibility Principle (SRP)**

   **Principio:** Una clase debe tener una única razón para cambiar, es decir, debe tener una sola responsabilidad.

   **Ejemplo:** En el archivo `src/srp.ts`, se muestra cómo separar la lógica de manejo de usuarios y tareas en clases distintas.

    ```bash
    npm run srp
    ```

2. **Open/Closed Principle (OCP)**

   **Principio:** Las entidades de software deben estar abiertas para la extensión, pero cerradas para la modificación.

   **Ejemplo:** En el archivo `src/ocp.ts`, se muestra cómo extender la funcionalidad de una clase sin modificarla.

    ```bash
    npm run ocp
    ```

3. **Liskov Substitution Principle (LSP)**

   **Principio:** Los objetos de una clase derivada deben poder sustituirse por objetos de la clase base sin alterar el correcto funcionamiento del programa.

   **Ejemplo:** En el archivo `src/lsp.ts`, se muestra cómo extender la funcionalidad de una clase base y aún así cumplir con el contrato de la clase base.

    ```bash
    npm run lsp
    ```

4. **Interface Segregation Principle (ISP)**

   **Principio:** Los clientes no deben verse forzados a depender de interfaces que no utilizan. Es mejor tener varias interfaces específicas que una interfaz general.

   **Ejemplo:** En el archivo `src/isp.ts`, se muestra cómo diseñar interfaces específicas para operaciones de usuario y tarea.

    ```bash
    npm run isp
    ```

5. **Dependency Inversion Principle (DIP)**

   **Principio:** Las dependencias deben ser de abstracciones, no de clases concretas. Los detalles deben depender de las abstracciones, no al revés.

   **Ejemplo:** En el archivo `src/dip.ts`, se muestra cómo implementar el principio de inversión de dependencias utilizando interfaces y clases concretas.

    ```bash
    npm run dip
    ```


### Ejemplo Final Integrado

El archivo `src/solid.ts` combina todos los principios SOLID en una aplicación simple que gestiona usuarios y tareas.

**Cómo ejecutar el ejemplo final:**

```bash
npm solid
```

Este archivo demuestra cómo cada principio SOLID se integra en una aplicación práctica.
