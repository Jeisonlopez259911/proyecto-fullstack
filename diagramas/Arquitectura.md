![alt text](<Diagrama Arquitectura.png>)

```mermaid
graph TD
A[Frontend]
B[AuthContext]
C[AuthService]
D[Axios]
E[Backend Node]
A --> B
B --> C
C --> D
D --> E
```